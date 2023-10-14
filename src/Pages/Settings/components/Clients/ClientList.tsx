import {
  ArrowDownIcon,
  ArrowUpIcon,
  EditIcon,
  DeleteIcon,
  AddIcon,
} from "@chakra-ui/icons";
import {
  Card,
  Flex,
  IconButton,
  Select,
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
  AbsoluteCenter,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Heading,
  DrawerHeader,
  Text,
  HStack,
  Spinner,
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
import { MdArrowBack } from "react-icons/md";
import DeleteClient from "./DeleteClient";
import PaginationTable from "../PaginationTable/PaginationTable";
import { FaChartPie, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import Geocode from "react-geocode";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { set } from "date-fns";
import usePageTitleStore from "../../../../hooks/NavBar/PageTitleStore";
import useAuthStore from "../../../../hooks/Authentication/store";
import { IconSortArrow } from "../../../../assets/icons/IconSortArrow";
import RequiredFormLabel from "../../../RequiredFields/RequiredFormLabel";
import Client from "../../../../models/Client";
import Site from "../../../../models/Site";
import useClient from "../../../../hooks/Settings/Client/useClient";
import { useClientStore } from "../../../../hooks/Settings/Client/useClientStore";
import useCreateClient from "../../../../hooks/Settings/Client/useCreateClient";
import useClientMutation from "../../../../hooks/Settings/Client/useClientMutation";
import useCreateSite from "../../../../hooks/Settings/Client/Site/useCreateSite";

const columnHelper = createColumnHelper<Client>();

const columns = [
  columnHelper.accessor("code", {
    header: "Code",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("site", {
    header: "Address",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor((value) => value.primaryContactName ?? "-", {
    header: "Primary  Contact",

    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor((value) => value.primaryContactEmail ?? "-", {
    header: "Primary  Email",

    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor((value) => value.primaryContactPhone ?? "-", {
    header: "Primary  Phone",

    cell: (info) => {
      return info.getValue();
    },
  }),
];

const ClientList = () => {
  const { isClientCreateModalOpen, setIsClientCreateModalOpen } =
    useClientStore();

  const pageTitleStore = usePageTitleStore();

  useEffect(() => {
    pageTitleStore.setPageTitle("Clients List");
  }, []);

  const { user } = useAuthStore();

  const { isLoading, data, error } = useClient();

  const [sorting, setSorting] = useState<SortingState>([]); // 1

  const [filtering, setFiltering] = useState<string>(""); //2
  const table = useReactTable({
    data: (!isLoading && data && data) || [],
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
    "Code",
    "Name",
    "Address",
    "Primary Name",
    "Primary Email",
    "Primary Phone",
  ];
  const keys = [
    "code",
    "name",
    "addresses",
    "primaryContactName",
    "primaryContactEmail",
    "primaryContactPhone",
  ];

  //create
  const [createClient, setCreateClient] = useState<Client>({} as Client);
  const createModal = useDisclosure();

  //create client
  const [validateCode, setValidateCode] = useState("");

  const [validateName, setValidateName] = useState("");
  const [validateCity, setValidateCity] = useState("");
  const [createdClientId, setCreatedClientId] = useState<number>(0);

  const createClientQuery = useCreateClient(() => {
    createModal.onClose();
  }, setCreatedClientId);
  console.log("createdClientId", createdClientId);

  const handleCreate = async () => {
    createClientQuery.mutate({
      name: createClient.name,
      code: createClient.code,
      primaryContactName: createClient.primaryContactName,
      primaryContactEmail: createClient.primaryContactEmail,
      primaryContactPhone: createClient.primaryContactPhone,
      primaryFinancialName: createClient.primaryFinancialName,
      primaryFinancialEmail: createClient.primaryFinancialEmail,
      siteType: createClient.siteType,
      currency: createClient.currency,
      vatRate: createClient.vatRate,
      vatValue: createClient.vatValue,
      vatNumber: createClient.vatNumber,
      companyId: user?.companyId,
      createdByUserId: user?.id,
    });
    createSiteModal.onOpen();
  };

  //create site
  const createSiteModal = useDisclosure();

  const [createSite, setCreateSite] = useState<Site>();
  const createSiteQuery = useCreateSite(() => {
    createSiteModal.onClose();
  });
  const handleSiteCreate = async () => {
    console.log("createSite", createSite);
    createSiteQuery.mutate({
      name: createSite?.name,
      contactEmail: createSite?.contactEmail,
      contactName: createSite?.contactName,
      contactPhone: createSite?.contactPhone,
      addressLine1: createSite?.addressLine1,
      addressLine2: createSite?.addressLine2,
      city: createSite?.city,
      clientId: createdClientId,
      postCode: createSite?.postCode,
    });
    setCreatedClientId;
  };

  //delete
  const handleDelete = () => {
    deleteClient.mutate(deleteClientId);
  };
  const deleteModal = useDisclosure();
  const deleteClient = useClientMutation(() => {
    deleteModal.onClose();
  }, false);
  const [deleteClientId, setDeleteClientId] = useState(0);

  // new Client
  const [modelSection, setModelSection] = useState<String>("NewClient");

  const [activeDrower, setActiveDrower] = useState<String>("createClient");
  const [hovered, setHovered] = useState(false);
  const [vatValue, setVatValue] = useState("");
  useEffect(() => {
    setCreateClient((prevClient) => ({
      ...prevClient,
      vatValue: vatValue,
    }));
  }, [vatValue]);
  const handleVatValue = (option: string) => {
    console.log(option);
    switch (option) {
      case "zeroRate":
        setVatValue("0");
        break;
      case "standardRate":
        setVatValue("20");
        break;
      case "lowRate":
        setVatValue("5");
        break;
      default:
        setVatValue("0");
        break;
    }
  };
  const [showError, setShowError] = useState(false);
  const [showSiteError, setShowSiteError] = useState(false);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" color="red" />
      </Box>
    );
  }

  return (
    <>
      <Flex w={"full"} direction={"row"}>
        <InputGroup width={"30%"} m={5}>
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
          sheetName={"Clients_List"}
        />

        <Button
          leftIcon={<AddIcon />}
          my={4}
          mx={2}
          variant="solid"
          size="md"
          onClick={() => {
            createModal.onOpen();
            setActiveDrower("createClient");
          }}
        >
          {"Add Client"}
        </Button>
      </Flex>

      <Card
        height={"full"}
        p={0}
        borderRadius={"xl"}
        width={"full"}
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
                      <Link to={`/settings/clients/${row.original.id}`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Link>
                    </Td>
                  </>
                ))}

                <Td>
                  <HStack>
                    <Link to={`/reports/jobQuery/${row.original.id}`}>
                      <IconButton
                        aria-label="Search database"
                        icon={<FaChartPie />}
                        variant={"outline"}
                        size={"sm"}
                        title="Job Queries"
                        m={1}
                      />
                    </Link>
                    <Link to={`/job/addjob/${row.original.id}`}>
                      <IconButton
                        aria-label="Search database"
                        icon={<AddIcon />}
                        variant={"outline"}
                        size={"sm"}
                        title="Log new Job"
                        m={1}
                      />
                    </Link>
                    <Link
                      to={`/settings/clients/clientContact/${row.original.id}`}
                    >
                      <IconButton
                        aria-label="Search database"
                        icon={<FaUser />}
                        variant={"outline"}
                        size={"sm"}
                        title="contacts"
                        m={1}
                      />
                    </Link>

                    <IconButton
                      aria-label="Search database"
                      onClick={() => {
                        setDeleteClientId(row.original.id ?? 0);
                        deleteModal.onOpen();
                      }}
                      icon={<DeleteIcon />}
                      variant={"outline"}
                      size={"sm"}
                      m={1}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Spacer></Spacer>
        <PaginationTable data={!isLoading && data && data} table={table} />{" "}
      </Card>
      {/* create Modal */}
      <Drawer
        onClose={() => {
          setIsClientCreateModalOpen(false);
          createModal.onClose();
        }}
        isOpen={createModal.isOpen || isClientCreateModalOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {modelSection == "financialDetails" && (
              <IconButton
                onClick={() => setModelSection("NewClient")}
                aria-label="Search database"
                icon={<MdArrowBack />}
              />
            )}
          </DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter overflowY="auto" maxH="800px">
              {modelSection == "NewClient" && (
                <>
                  <Heading my={5} size={"md"}>
                    Create New Client
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <RequiredFormLabel label="Client Code" />

                    <Input
                      value={createClient?.code || ""}
                      className="FormControl"
                      placeholder=""
                      onChange={(e) => {
                        setCreateClient({
                          ...createClient!,
                          code: e.target.value,
                        });
                        setValidateCode(e.target.value);
                      }}
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <RequiredFormLabel label="Client Name" />
                    <Input
                      onChange={(e) => {
                        setCreateClient({
                          ...createClient!,
                          name: e.target.value,
                        });
                        setValidateName(e.target.value);
                      }}
                      value={createClient?.name || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Primary Contact Name</FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          primaryContactName: e.target.value,
                        })
                      }
                      value={createClient?.primaryContactName || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Primary Contact Email</FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          primaryContactEmail: e.target.value,
                        })
                      }
                      value={createClient?.primaryContactEmail || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel>Primary Contact Phone</FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          primaryContactPhone: e.target.value,
                        })
                      }
                      value={createClient?.primaryContactPhone || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button
                    onClick={() => {
                      if (validateCode === "" || validateName === "") {
                        setShowError(true);
                      } else {
                        setShowError(false);
                        setModelSection("financialDetails");
                      }
                    }}
                    w={"full"}
                    my={10}
                  >
                    Next
                  </Button>
                  {showError && (
                    <Text color="red">
                      Please fill out the required fields.
                    </Text>
                  )}
                </>
              )}
              {modelSection == "financialDetails" && (
                <>
                  <Heading my={5} size={"md"}>
                    Financial details
                  </Heading>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Name </FormLabel>

                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          primaryFinancialName: e.target.value,
                        })
                      }
                      value={createClient?.primaryFinancialName || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>
                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> Financial Contact Email </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          primaryFinancialEmail: e.target.value,
                        })
                      }
                      value={createClient?.primaryFinancialEmail || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Site Type </FormLabel>
                    <Select
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          siteType: e.target.value,
                        })
                      }
                      value={createClient?.siteType || ""}
                      variant="outline"
                      placeholder=" Select Site Type"
                    >
                      <option value="company">Company</option>
                      <option value="household">Household</option>
                    </Select>
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> Currency Code </FormLabel>
                    <Select
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          currency: e.target.value,
                        })
                      }
                      value={createClient?.currency || ""}
                      variant="outline"
                      placeholder=" Select currency code"
                    >
                      <option value="aud">AUD</option>
                      <option value="eur">EUR</option>
                      <option value="gbp">GBP</option>
                    </Select>
                  </FormControl>
                  <FormControl pb={10} w={"lg"}>
                    <FormLabel> VAT Rate </FormLabel>
                    <Select
                      onChange={(e) => {
                        handleVatValue(e.target.value);
                        setCreateClient({
                          ...createClient!,
                          vatRate: e.target.value,
                        });
                      }}
                      value={createClient?.vatRate || ""}
                      variant="outline"
                      placeholder=" Select VAT rate"
                    >
                      <option value="zeroRate">Zero Rate</option>
                      <option value="standardRate">Standard Rate</option>
                      <option value="lowRate">Low Rate</option>
                    </Select>
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Value </FormLabel>
                    <Input
                      defaultValue={vatValue || ""}
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          vatValue: e.target.value,
                        })
                      }
                      value={createClient?.vatValue || vatValue}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <FormControl pb={5} w={"lg"}>
                    <FormLabel> VAT Number </FormLabel>
                    <Input
                      onChange={(e) =>
                        setCreateClient({
                          ...createClient!,
                          vatNumber: e.target.value,
                        })
                      }
                      value={createClient?.vatNumber || ""}
                      className="FormControl"
                      placeholder=""
                    />
                  </FormControl>

                  <Button onClick={() => handleCreate()} w={"full"} my={10}>
                    Save
                  </Button>
                </>
              )}
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Delete Modal  */}
      <DeleteClient
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        onDelete={handleDelete}
      />

      {/* create site Modal  */}
      <Drawer
        onClose={createSiteModal.onClose}
        isOpen={createSiteModal.isOpen}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <AbsoluteCenter overflowY="auto" maxH="800px">
              <>
                <Heading my={5} size={"md"}>
                  Add Site{" "}
                </Heading>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Site Name </FormLabel>

                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        name: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.name!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Contact Name </FormLabel>

                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        contactName: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.contactName!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Site Email </FormLabel>
                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        contactEmail: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.contactEmail!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl w={"lg"}>
                  <FormLabel> Phone </FormLabel>
                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        contactPhone: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.contactPhone!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Address Line 1 </FormLabel>
                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        addressLine1: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.addressLine1!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>

                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Address Line 2 </FormLabel>
                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        addressLine2: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.addressLine2!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <RequiredFormLabel label="City" />
                  <Input
                    onChange={(e) => {
                      setCreateSite({
                        ...createSite!,
                        city: e.target.value,
                      });
                      setValidateCity(e.target.value);
                    }}
                    value={createSite && createSite!.city!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                <FormControl pb={5} w={"lg"}>
                  <FormLabel> Postcode</FormLabel>
                  <Input
                    onChange={(e) => {
                      return setCreateSite({
                        ...createSite,
                        postCode: e.target.value,
                      });
                    }}
                    value={createSite && createSite!.postCode!}
                    className="FormControl"
                    placeholder=""
                  />
                </FormControl>
                {showSiteError && (
                  <Text color="red">Please fill out city field.</Text>
                )}
                <Button
                  onClick={() => {
                    if (validateCity === "") {
                      setShowSiteError(true);
                    } else {
                      setShowSiteError(false);
                      handleSiteCreate();
                    }
                  }}
                  w={"full"}
                  my={10}
                >
                  Save
                </Button>
              </>
            </AbsoluteCenter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ClientList;
