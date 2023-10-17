import {
  Card,
  Flex,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  Spacer,
  Box,
  Badge,
  Button,
  HStack,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import moment from "moment";
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationTable from "../../Settings/components/PaginationTable/PaginationTable";
import { ExportToExcelProps } from "../../Excel/ExportToExcel";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Job } from "../../../models/Job";
import { IconFlag } from "../../../assets/icons/IconFlag";
import { BsSearch } from "react-icons/bs";
import { IconSortArrow } from "../../../assets/icons/IconSortArrow";

const columnHelper = createColumnHelper<Job>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => <Text>{info.getValue() ?? ""}</Text>,
    header: () => "ID",
  }),

  columnHelper.accessor((value) => value.client?.name ?? "-", {
    header: "Client",

    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor(
    (value) => {
      const address1 = value.site?.addressLine1 ?? "";
      const address2 = value.site?.addressLine2 ?? "";
      const address = address1 + (address2 ? ", " + address2 : "");
      return address || "-";
    },
    {
      header: "Address",
      cell: (info) => {
        const fullAddress = info.getValue() || "-";
        const truncatedAddress = fullAddress.substring(0, 25);

        return (
          <Tooltip label={fullAddress} background={"gray.50"} color={"teal"}>
            <Text>
              {truncatedAddress} {fullAddress.length > 25 && "..."}
            </Text>
          </Tooltip>
        );
      },
    }
  ),
  columnHelper.accessor((value) => value.jobType?.name ?? "-", {
    header: "Type",

    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor((value) => "-", {
    header: "Sub Type",

    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor(
    (value) =>
      value.engineer?.firstName + " " + value.engineer?.lastName ?? "-",
    {
      header: "Assignee",

      cell: (info) => {
        return info.getValue();
      },
    }
  ),

  columnHelper.accessor(
    (value) => {
      const schaduleDate = moment(value.scheduleDateEnd);
      const formattedDate = schaduleDate.isValid()
        ? schaduleDate.format("MMM DD - hh:mm a")
        : "-";
      return formattedDate;
    },
    {
      header: "SCHEDULE Date",
      cell: (info) => {
        return info.getValue() ?? "-";
      },
    }
  ),
  // columnHelper.accessor("status", {
  //   header: "Status",
  //   cell: (info) => {
  //     const status = info.getValue()?.toString();
  //     let color = "gray";
  //     let background = "#E5F7F8";

  //     switch (status) {
  //       case JobStatus.OPEN:
  //         color = "#00ABB6";
  //         background = "#E5F7F8";

  //         break;
  //       case JobStatus.CLOSED:
  //         color = "#8D8D8D";
  //         background = "#EEEEEE";
  //         break;
  //       case JobStatus.PENDING:
  //         color = "#FE9B0E";
  //         background = "#FFF9EE";

  //         break;
  //       case JobStatus.ASSIGNED:
  //         color = "#0C9D61";
  //         background = "#E5F5EC";
  //         break;
  //       case JobStatus.RESOLVED:
  //         color = "#3A70E2";
  //         background = "#E4F2FF";
  //         break;
  //       default:
  //         break;
  //     }

  //     return (
  //       <Badge
  //         variant={"subtle"}
  //         borderRadius={"xl"}
  //         px={3}
  //         py={1.5}
  //         color={color}
  //         background={background}
  //       >
  //         {status}
  //       </Badge>
  //     );
  //   },
  // }),
  // columnHelper.accessor("proirty", {
  //   header: "Priority",

  //   cell: (info) => {
  //     return info.getValue() != null ? (
  //       <>
  //         {" "}
  //         <Button
  //           variant={"link"}
  //           color={
  //             info.getValue() == "Normal"
  //               ? "Info.500"
  //               : info.getValue() == "High"
  //               ? "Error.500"
  //               : "Success.500"
  //           }
  //           leftIcon={<IconFlag />}
  //           aria-label={"sdd"}
  //         >
  //           {" "}
  //           <Text color={"gray"}>{info.getValue()?.toString()}</Text>{" "}
  //         </Button>{" "}
  //       </>
  //     ) : (
  //       "-"
  //     );
  //   },
  // }),
];
interface props {
  data: Job[];
  exportToExcel?: (exportToExcel: ExportToExcelProps) => void;
}
const AllJobsTable = ({ data, exportToExcel }: props) => {
  const rerender = React.useReducer(() => ({}), {})[1];

  const [sorting, setSorting] = useState<SortingState>([]); // 1

  const [filtering, setFiltering] = useState<string>(""); //2

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
  const headers = [
    "ID",
    "Client",
    "Address",
    "Type/SubType",
    "Assignee",
    "SCHEDULE Date",
    "Status",
    "Priority",
  ];
  const keys = [
    "id",
    "customerId",
    "adress",
    "type",
    "enginer",
    "schadule",
    "status",
    "proirty",
  ];

  // const transformedData = data.map((item) => ({
  //   ...item,
  //   proirty: item.proirty,
  //   id: item.id,
  //   type: item.type?.name + "/" + item.type?.subType,
  //   adress: item.adress?.address1 + " " + item.adress?.address2,
  //   // customerId: item?.customerId
  //   //   ? useFindClientByID({ id: item?.customerId ?? "" })?.data?.name
  //   //   : "-",

  //   // enginer: item.enginer
  //   //   ?.map((engineerId) => {
  //   //     const engineerName =
  //   //       GetUserName({ userId: engineerId ?? "-" })?.props?.children ?? "-";
  //   //     return engineerName;
  //   //   })
  //   //   .join(", "),
  // }));
  // useEffect(() => {
  //   exportToExcel &&
  //     exportToExcel({
  //       data: transformedData,
  //       headers,
  //       keys,
  //       sheetName: "Jobs",
  //     });
  // }, [data.length]);

  return (
    <>
      <Card
        p={0}
        borderRadius={"xl"}
        width={"full"}
        variant={"outline"}
        borderRight={"hidden"}
        overflow={"scroll"}
        h={"full"}
      >
        <InputGroup width={"25%"} m={5}>
          <InputLeftElement pointerEvents="none">
            <BsSearch />
          </InputLeftElement>
          <Input
            borderRadius={"md"}
            placeholder="Enter Filter"
            onChange={(e) => setFiltering(e.target.value)}
          />
        </InputGroup>
        <Flex w={"full"} direction={"row"}></Flex>

        <Table size="md" rounded={"xl"} borderRadius={"xl"} maxH={800}>
          <Thead
            p={0}
            m={0}
            borderRadius={"xl"}
            bg={"#F7F7FB"}
            shadow={"none"}
            w={"full"}
          >
            {table.getHeaderGroups().map((headerGroup, index) => (
              <Tr key={index}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={index + 1}
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

                      <Box color={"gray"} fontSize={"sm"} ml={1}>
                        {header.column.getIsSorted() === "desc" ? (
                          <ArrowDownIcon />
                        ) : header.column.getIsSorted() === "asc" ? (
                          <ArrowUpIcon />
                        ) : (
                          <IconSortArrow />
                        )}
                      </Box>
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row, index) => (
              <Tr key={index} bg={row.index % 2 != 0 ? "Neutral.100" : "white"}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={index + 1}>
                    <Link to={`/job/${row.original.id}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Link>
                  </Td>
                ))}
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

export default AllJobsTable;
