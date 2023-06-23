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
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

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
  const isReports = text === "Reports";
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {isReports ? (
        <>
          <Button
            onClick={onToggle}
            variant="ghost"
            w="full"
            fontWeight="bold"
            color={isOpen ? "teal.500" : "black"}
          >
            <Flex alignItems="center" justify="space-between" w="full">
              <Flex alignItems="center">
                {icon} {text}
              </Flex>
              <ChevronDownIcon transform={isOpen ? "rotate(180deg)" : ""} />
            </Flex>
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <VStack spacing={4} align="center">
              {subItems?.map((subItem) => (
                <ChakraLink
                  key={subItem.url}
                  as={NavLink}
                  to={subItem.url}
                  fontWeight="bold"
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
          fontWeight="bold"
          color="black"
          _hover={{
            color: "teal.500",
          }}
          _activeLink={{
            bg: "#1396ab",
            color: "white",
            borderRadius: "lg",
            px: "5",
            py: "2",
            borderColor: "#1396ab",
            border: "none",
          }}
          to={url}
          px={5}
          py={2}
          borderRadius="lg"
        >
          {icon} {text}
        </ChakraLink>
      )}
    </>
  );
};

const TopNav = () => {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });

  const NavItems = () => (
    <VStack spacing={5} m={0} align="center">
      <SideBarItem
        icon={<InfoOutlineIcon fontSize="sm" mx="2px" />}
        text="Company Info"
        url="/settings/company/info"
      />
      <Box w="full" h="1px" bg="grey" opacity="0.5" my={2} />

      <SideBarItem
        icon={<SunIcon fontSize="sm" mx="2px" />}
        text="Operational"
        url="/operational"
      />
      <SideBarItem
        icon={<DragHandleIcon fontSize="sm" mx="0px" />}
        text="Statistical "
        url="/statistical"
      />
      <SideBarItem
        icon={<RepeatIcon fontSize="sm" mx="2px" />}
        text="Jobs"
        url="/jobs"
      />
      <SideBarItem
        icon={<SettingsIcon fontSize="sm" mx="2px" />}
        text="PPM"
        url="/ppm"
      />

      <SideBarItem
        icon={<SunIcon fontSize="sm" mx="2px" />}
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
          {
            text: "Invoicing Report",
            url: "/reports/invoicing",
          },
          {
            text: "Survey Report",
            url: "/reports/survey",
          },
        ]}
      />
      <SideBarItem
        icon={<ViewIcon fontSize="sm" mx="2px" />}
        text="Map"
        url="/map"
      />
      <SideBarItem
        icon={<CalendarIcon fontSize="sm" mx="2px" />}
        text="Scheduler"
        url="/scheduler"
      />
      <SideBarItem
        icon={<ChatIcon fontSize="sm" mx="2px" />}
        text="Chat"
        url="/chat"
      />
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
