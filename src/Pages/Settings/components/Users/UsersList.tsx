import { DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import ExportToExcel from "../../../Excel/ExportToExcel";
import { Link, NavLink } from "react-router-dom";
import PaginationTable from "../PaginationTable/PaginationTable";
import { IconSortArrow } from "../../../../assets/icons/IconSortArrow";
import usePageTitleStore from "../../../../hooks/NavBar/PageTitleStore";
import User from "../../../../models/User";

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("firstName", {
    header: "First Name",

    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",

    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",

    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("phone", {
    header: "Phone Number",

    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("role", {
    header: "Role",

    cell: (info) => info.getValue(),
  }),
];
interface UsersListProps {
  data: User[];
  setDeleteUserId: (id: number) => void;
  deleteModal: any;
}

const UsersList = ({ data, setDeleteUserId, deleteModal }: UsersListProps) => {
  const pageTitleStore = usePageTitleStore();

  useEffect(() => {
    pageTitleStore.setPageTitle("Users List");
  }, []);
  const [sorting, setSorting] = useState<SortingState>([]); // 1

  const [filtering, setFiltering] = useState<string>(""); //2
  console.log("data", data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //3
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering, // *3

    debugTable: true,
  });
  const headers = ["Name", "Email", "Contact Name", "Phone", "Role"];
  const keys = ["name", "email", "contactName", "phone", "type"];

  // const transformedData = data.map((item) => {
  //   const addresses = item.adresses || [];
  //   const contactName = addresses.length > 0 ? addresses[0]?.contactName : "";
  //   const tel = addresses.length > 0 ? addresses[0]?.tel : "";

  //   return {
  //     ...item,
  //     contactName,
  //     phone: tel,
  //   };
  // });

  return (
    <>
      <Flex w={"full"} direction={"row"}>
        <InputGroup width={"35%"} m={5}>
          <InputLeftElement pointerEvents="none">
            <BsSearch />
          </InputLeftElement>
          <Input
            borderRadius={"xl"}
            placeholder="Enter filter"
            onChange={(e) => setFiltering(e.target.value)}
          />
        </InputGroup>
        <Spacer />

        <ExportToExcel
          data={[]}
          headers={headers || []}
          keys={keys || []}
          sheetName={"Users_List"}
        />
      </Flex>
      <Card
        height={"auto"}
        p={0}
        borderRadius={"xl"}
        width={"full"}
        overflow={"scroll"}
        overflowX={"hidden"}
      >
        <Table size="md" rounded={"xl"} borderRadius={"xl"}>
          <Thead
            p={0}
            m={0}
            borderRadius={"xl"}
            bg={"#F7F7FB"}
            shadow={"none"}
            w={"full"}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    border="none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Flex
                      color={"Neutral.500"}
                      fontSize={"sm"}
                      fontWeight={"medium"}
                      alignItems="center"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      <Box color={"#1396ab"} fontSize={"md"} ml={1}>
                        <IconSortArrow />
                      </Box>
                    </Flex>
                  </Th>
                ))}
                <Th>Actions</Th>
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row, index) => (
              <Tr key={row.id} bg={index % 2 != 0 ? "Neutral.100" : "white"}>
                {row.getVisibleCells().map((cell) => (
                  <>
                    <Td key={cell.id}>
                      <Link to={`/settings/users/${row.original.id}`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Link>
                    </Td>
                  </>
                ))}
                <Td>
                  <IconButton
                    aria-label="Search database"
                    as={NavLink}
                    icon={<DeleteIcon />}
                    onClick={() => {
                      setDeleteUserId(row.original.id);
                      deleteModal.onOpen();
                    }}
                    variant={"outline"}
                    size={"sm"}
                    m={1}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Spacer></Spacer>
        <PaginationTable data={data} table={table} />
      </Card>
    </>
  );
};

export default UsersList;
