import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import {
  Card,
  Flex,
  Text,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";
import { Jobs } from "../../../models";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

// const defaultData: Person[] = [
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
// ];

interface Pros {
  data1: Jobs[];
}

const columnHelper = createColumnHelper<Jobs>();

const columns = [
  columnHelper.accessor("proirty", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("type", {
    header: () => "Type",
    cell: (info) => info.getValue()?.name,
  }),
  columnHelper.accessor("usersID", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("enginer", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];

const CustomTable = ({ data1 }: Pros) => {
  const [data, setData] = React.useState<Jobs[]>([]);

  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */

    setData(data1);
    console.log("data1");
    console.log(data1);
    console.log("data");
    console.log(data);
    return () => {
      true;
    };
  }, []);

  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    debugTable: true,
  });

  return (
    <>
      <Card
        overflow={"scroll"}
        p={0}
        borderRadius={"xl"}
        width={"full"}
        variant={"outline"}
      >
        <Table variant="simple" size="md">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead rounded={"xl"}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Flex justifyContent="space-between" m={4} alignItems="center">
          <Flex>
            <Tooltip label="First Page">
              <IconButton
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                icon={<ArrowLeftIcon h={3} w={3} />}
                mr={4}
                aria-label={""}
                variant={"outline"}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                icon={<ChevronLeftIcon h={6} w={6} />}
                aria-label={""}
                variant={"outline"}
              />
            </Tooltip>
          </Flex>

          <Flex alignItems="center">
            <Text flexShrink="0" mr={8}>
              Page{" "}
              <Text fontWeight="bold" as="span">
                {table.getState().pagination.pageIndex + 1}
              </Text>{" "}
              of{" "}
              <Text fontWeight="bold" as="span">
                {table.getPageCount()}
              </Text>
            </Text>
            <Text flexShrink="0">Go to page:</Text>{" "}
            <NumberInput
              ml={2}
              mr={8}
              w={28}
              min={1}
              max={table.getPageCount()}
              onChange={(value: any) => {
                const page = value ? value - 1 : 0;
                table.setPageIndex(value);
              }}
              defaultValue={table.getState().pagination.pageIndex + 1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Select
              w={32}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                icon={<ChevronRightIcon h={6} w={6} />}
                aria-label={""}
                variant={"outline"}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                icon={<ArrowRightIcon h={3} w={3} />}
                ml={4}
                aria-label={""}
                variant={"outline"}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default CustomTable;
