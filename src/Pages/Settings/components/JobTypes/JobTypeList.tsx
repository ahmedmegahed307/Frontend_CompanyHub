import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
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
  useDisclosure,
  Button,
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
import React, { useEffect, useRef, useState } from "react";

import { BsSearch } from "react-icons/bs";
import ExportToExcel from "../../../Excel/ExportToExcel";
import { NavLink } from "react-router-dom";

import PaginationTable from "../PaginationTable/PaginationTable";
import { IconSortArrow } from "../../../../assets/icons/IconSortArrow";
import JobType from "../../../../models/JobType";
import usePageTitleStore from "../../../../hooks/NavBar/PageTitleStore";
import useJobTypeMutation from "../../../../hooks/Settings/JobType/useJobTypeMutation";
import useCreateJobType from "../../../../hooks/Settings/JobType/useCreateJobType";
import useJobTypeStore from "../../../../hooks/Settings/JobType/store";

const columnHelper = createColumnHelper<JobType>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  {
    header: "Associated SubTypes",
    cell: (info: any) => {
      const jobType = info.row.original;
      const subTypeNames = jobType.jobSubTypes["$values"].map(
        (subType: any) => subType.name
      );

      return subTypeNames.join(", ");
    },
  },
];

interface JobTypeListProps {
  jobTypeList: JobType[];
  setDeleteJobTypeId: (id: number) => void;
  deleteModal: any;
  updateModal: any;
}
const JobTypeList = ({
  jobTypeList,
  setDeleteJobTypeId,
  deleteModal,
  updateModal,
}: JobTypeListProps) => {
  const { setUpdateJobType, setUpdateJobTypeInput } = useJobTypeStore();

  const [sorting, setSorting] = useState<SortingState>([]); // 1

  const [filtering, setFiltering] = useState<string>(""); //2

  const table = useReactTable({
    data: jobTypeList || [],
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
  const headers = ["Name", "Associated SubTypes"];
  const keys = ["name", "subTypeList"];
  return (
    <>
      <Card
        p={0}
        borderRadius={"xl"}
        width={"full"}
        variant={"outline"}
        borderRight={"hidden"}
        overflow={"scroll"}
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  </>
                ))}
                <Td display={"flex"}>
                  <IconButton
                    aria-label="Search database"
                    as={NavLink}
                    icon={<EditIcon />}
                    onClick={() => {
                      // setUpdateJobType(jobType.id),
                      //   setUpdateJobTypeInput(jobType),
                      updateModal.onOpen();
                    }}
                    variant={"outline"}
                    size={"sm"}
                    mr={1}
                  />

                  <IconButton
                    aria-label="Search database"
                    as={NavLink}
                    icon={<DeleteIcon />}
                    onClick={() => {
                      setDeleteJobTypeId(row.original.id || 0);
                      deleteModal.onOpen();
                    }}
                    variant={"outline"}
                    size={"sm"}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Spacer></Spacer>
        <PaginationTable data={jobTypeList} table={table} />
      </Card>
    </>
  );
};

export default JobTypeList;
