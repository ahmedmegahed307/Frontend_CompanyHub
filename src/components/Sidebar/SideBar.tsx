import { useState } from "react";
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
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
interface SubItemProps {
  text: string;
  url: string;
}

interface SideBarItemProps {
  text: string;
  url: string;
  icon: any;
  subItems?: SubItemProps[];
}

const SideBarItem = ({ text, url, icon, subItems }: SideBarItemProps) => {
  const isReports = text === "Reports";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isReports ? (
        <Menu>
          <MenuButton
            as={ChakraLink}
            w="full"
            fontWeight="bold"
            _activeLink={{
              bg: "#416D77",
              color: "white",
              borderRadius: "lg",
              px: "5",
              py: "2",
              borderColor: "#416D77",
              border: "none",
            }}
            _hover={{
              bg: "#416D77",
              color: "white",
            }}
            px={5}
            py={2}
            borderRadius="lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                {icon} {text}
              </Flex>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList>
            {subItems?.map((subItem) => (
              <MenuItem
                key={subItem.url}
                as={NavLink}
                to={subItem.url}
                fontWeight="bold"
                _activeLink={{
                  bg: "#416D77",
                  color: "white",
                  borderRadius: "lg",
                  px: "5",
                  py: "2",
                  borderColor: "#416D77",
                  border: "none",
                }}
                _hover={{
                  bg: "#416D77",
                  color: "white",
                }}
                px={5}
                py={2}
                borderRadius="lg"
              >
                {subItem.text}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <ChakraLink
          w="full"
          as={NavLink}
          fontWeight="bold"
          _activeLink={{
            bg: "#416D77",
            color: "white",
            borderRadius: "lg",
            px: "5",
            py: "2",
            borderColor: "#416D77",
            border: "none",
          }}
          _hover={{
            bg: "#416D77",
            color: "white",
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

function TopNav() {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });

  const NavItems = () => (
    <VStack spacing={5} m={0} align="start">
      <SideBarItem
        icon={<InfoOutlineIcon fontSize={"sm"} mx="2px" />}
        text="Operational"
        url="/operational"
      />
      <SideBarItem
        icon={<DragHandleIcon fontSize={"sm"} mx="0px" />}
        text="Statistical Dashboard"
        url="/statistical"
      />
      <SideBarItem
        icon={<RepeatIcon fontSize={"md"} mx="2px" />}
        text="Jobs"
        url="/jobs"
      />
      <SideBarItem
        icon={<SettingsIcon fontSize={"md"} mx="2px" />}
        text="PPM"
        url="/ppm"
      />
      <SideBarItem
        icon={<CalendarIcon fontSize={"sm"} mx="2px" />}
        text="Scheduler"
        url="/scheduler"
      />
      <SideBarItem
        icon={<ViewIcon fontSize={"md"} mx="2px" />}
        text="Map"
        url=""
      />
      <SideBarItem
        icon={<ChatIcon fontSize={"sm"} mx="2px" />}
        text="Chat"
        url=""
      />
      <SideBarItem
        icon={<SunIcon fontSize={"md"} mx="2px" />}
        text="Reports"
        url=""
        subItems={[
          {
            text: "Job Query Report",
            url: "/reports/jobQuery",
          },
          {
            text: "Time Sheet Report",
            url: "/reports/timeSheet",
          },
          {
            text: "Invoicing Report",
            url: "/reports/inviocing",
          },
        ]}
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
            <MenuButton aria-label="Open menu" />
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
}

export default TopNav;
