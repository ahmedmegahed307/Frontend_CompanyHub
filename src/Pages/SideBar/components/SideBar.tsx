import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  VStack,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  Button,
  useDisclosure,
  Text,
  HStack,
  Divider,
  Icon,
  Avatar,
  Stack,
  Heading,
  Spacer,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  InfoOutlineIcon,
  ChatIcon,
  RepeatIcon,
  SettingsIcon,
  CalendarIcon,
  DragHandleIcon,
  ViewIcon,
  SunIcon,
  ChevronDownIcon,
  UnlockIcon,
  StarIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaList, FaUser } from "react-icons/fa";
import { Briefcase } from "../../../assets/icons/IconBriefcase";
import { MdGroupWork, MdLogout } from "react-icons/md";
import { LogoSVG } from "../../../assets/icons/logoSVG";
import { IconDashboard } from "../../../assets/icons/IconDashboard";
import { People } from "../../../assets/icons/IconPeople";
import { Profile } from "../../../assets/icons/IconProfile";
import { PPMIcon } from "../../../assets/icons/IconPPM";
import { Calendar } from "../../../assets/icons/IconCalendar";
import { Setting } from "../../../assets/icons/IconSetting";
import { InvoiceIcon } from "../../../assets/icons/IconInvoice";
import { ReportsIcon } from "../../../assets/icons/IconReports";
import useAuthStore from "../../../hooks/Authentication/store";

interface SubItemProps {
  text: string;
  url: string;
}

interface SideBarItemProps {
  text: string;
  url: string;
  icon: React.ReactElement;
  subItems?: SubItemProps[];
}

const SideBarItem = ({ text, url, icon, subItems }: SideBarItemProps) => {
  //const isReports = text === "Reports";
  const isDropdown = subItems && subItems.length > 0;

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {isDropdown ? (
        <>
          <Button
            onClick={onToggle}
            variant="ghost"
            w="full"
            fontWeight="normal"
            fontSize={"sm"}
            color="Neutral.500"
            justifyContent="space-between"
          >
            <Flex alignItems="center" justify="space-between" w="full">
              <Flex alignItems="center">
                <HStack>
                  <Box>{icon}</Box>
                  <Text>{text}</Text>
                </HStack>
              </Flex>
              <ChevronDownIcon transform={isOpen ? "rotate(180deg)" : ""} />
            </Flex>
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <VStack spacing={2} align="start" ml={5}>
              {subItems?.map((subItem) => (
                <ChakraLink
                  key={subItem.url}
                  as={NavLink}
                  to={subItem.url}
                  fontWeight="semiBold"
                  display="flex"
                  alignItems="center"
                  color="grey"
                  _hover={{
                    color: "#1396ab",
                  }}
                  _activeLink={{
                    color: "#1396ab",
                  }}
                >
                  {subItem.text}
                </ChakraLink>
              ))}
            </VStack>
          </Collapse>
        </>
      ) : (
        <ChakraLink
          w="full"
          as={NavLink}
          fontWeight="normal"
          fontSize={"sm"}
          color="Neutral.500"
          _hover={{
            bg: "Neutral.50",
          }}
          _activeLink={{
            bg: "Primary.50",
            color: "Primary.700",
            borderRadius: "8",
            pl: "2.5",
            pr: "2.5",
            py: "2",
            borderColor: "#1396ab",
            borderRight: "none",
          }}
          to={url}
          px={5}
          py={2}
          borderRadius="8"
          display="flex"
          alignItems="center"
        >
          <HStack
            to={url}
            as={NavLink}
            w={"full"}
            _activeLink={{
              borderRight: "2px solid",
              borderColor: "Primary.700",
            }}
          >
            <Box>{icon}</Box>
            <Text>{text}</Text>
          </HStack>
        </ChakraLink>
      )}
    </>
  );
};

const TopNav = () => {
  //  const { data: company } = useCompany();

  const isMobileNav = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();
  const userStore = useAuthStore();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  const NavItems = () => (
    <VStack h={"auto"} spacing={4} w={60} m={0} align="start">
      <Box mt={6} mb={10}>
        <Icon as={LogoSVG}></Icon>
      </Box>

      <SideBarItem
        icon={<IconDashboard />}
        text="Dashboard"
        url="/operational"
      />
      <SideBarItem icon={<Briefcase />} text="Jobs" url="/jobs" />

      <SideBarItem
        icon={<People />}
        text="Clients"
        url="/settings/clients/clientsList"
      />

      <SideBarItem
        icon={<PPMIcon />}
        text="Users "
        url="/settings/users/usersList"
      />

      <SideBarItem
        icon={<SettingsIcon fontSize="sm" mx="2px" />}
        text="PPM"
        url="/ppm"
      />
      <SideBarItem icon={<Calendar />} text="Scheduler" url="/calendar" />
      <Divider></Divider>

      {/* <SideBarItem icon={<InvoiceIcon />} text="Invoices" url="/chat" /> */}

      <SideBarItem
        icon={<ReportsIcon />}
        text="Reports"
        url=""
        subItems={[
          {
            text: "JobQuery Report",
            url: "/reports/jobQuery",
          },
          {
            text: "TimeSheet Report",
            url: "/reports/timeSheet",
          },
          // {
          //   text: "Invoicing Report",
          //   url: "/reports/invoicing",
          // },
          {
            text: "Survey Report",
            url: "/reports/survey",
          },
        ]}
      />

      {/* <SideBarItem
        icon={<IconCart  />}
        text="Purchases"
        url="/chat"
      /> */}

      <Divider></Divider>

      {/* <SideBarItem icon={<Setting />} text="Global Settings" url="/chat" /> */}
      <SideBarItem
        icon={<Setting />}
        text="Global Settings"
        url=""
        subItems={[
          {
            text: "JobTypes",
            url: "/settings/jobtype/list",
          },
          {
            text: "Checklists",
            url: "/settings/checkLists",
          },
          {
            text: "Resolutions",
            url: "/settings/resolution/list",
          },
        ]}
      />

      <Spacer></Spacer>
      <Box position="fixed" bottom="0" width="100%" bg="white">
        <Menu>
          <MenuButton>
            <Stack pb={9} px={5} direction="row">
              <Avatar
                size={"sm"}
                name={
                  userStore.user?.firstName + " " + userStore.user?.lastName
                }
                src="https://bit.ly/broken-lisdsdsdnk"
              />

              <VStack align={"start"} spacing={0}>
                <Heading fontWeight={"lg"} fontSize={"sm"}>
                  {userStore.user?.firstName + " " + userStore.user?.lastName}
                </Heading>
                <Heading fontSize={"sm"} color={"Primary.700"}>
                  Company Info
                </Heading>
              </VStack>
              <ChevronDownIcon />
            </Stack>
          </MenuButton>
          <MenuList m={0} p={0} borderRadius={10}>
            <HStack
              align={"center"}
              justify={"center"}
              height={50}
              bgSize={"cover"}
              bgImage={"src/assets/img/profileMenuBack.png"}
            >
              <Avatar
                size={"sm"}
                name={
                  userStore.user?.firstName + " " + userStore.user?.lastName
                }
                src="https://bit.ly/broken-lisdsdsdnk"
              />
              <VStack align={"start"} spacing={0}>
                <Heading fontWeight={"lg"} fontSize={"sm"}>
                  {userStore.user?.firstName + " " + userStore.user?.lastName}
                </Heading>
                <Heading fontSize={"xs"}>Company Info</Heading>
              </VStack>
            </HStack>
            <MenuGroup>
              <Link to={`/settings/users/${1}`} target="_blank">
                {" "}
                <MenuItem icon={<AddIcon />}> My account</MenuItem>
              </Link>
              <Link to={`/settings/company/info`} target="_blank">
                <MenuItem icon={<AddIcon />}> Company Info</MenuItem>
              </Link>
              <MenuItem icon={<AddIcon />}> Team management</MenuItem>
              <MenuItem icon={<AddIcon />}> Billing information</MenuItem>
              <MenuItem icon={<AddIcon />}> Help and support</MenuItem>
              <MenuItem icon={<AddIcon />}> Dark mode</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem icon={<MdLogout />} onClick={() => handleLogout()}>
              {" "}
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </VStack>
  );

  return (
    <Box
      borderRight="1px solid"
      h="92vh"
      borderColor="gray.200"
      as="nav"
      py={2}
    >
      <Flex alignItems="center" maxW="7xl" mx="auto" px="4">
        {isMobileNav ? (
          <Menu>
            <MenuButton aria-label="Open menu">
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <NavItems />
            </MenuList>
          </Menu>
        ) : (
          <Flex direction="column" alignItems="center">
            <NavItems />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default TopNav;
