import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  AddIcon,
  HamburgerIcon,
  InfoOutlineIcon,
  ChatIcon,
  RepeatIcon,
  SettingsIcon,
  CalendarIcon,
  DragHandleIcon,
  ViewIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

interface SideBarItemProps {
  text: string;
  url: string;
  icon: any;
}

const SideBarItem = ({ text, url, icon }: SideBarItemProps) => {
  return (
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
  );
};

function TopNav() {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItems = () => (
    <VStack spacing={1} m={0} align="start">
      <SideBarItem
        icon={<InfoOutlineIcon fontSize={"xs"} mx="2px" />}
        text="Operational"
        url="/operational"
      />
      <SideBarItem
        icon={<DragHandleIcon fontSize={"xs"} mx="2px" />}
        text="Statistical Dashboard"
        url="/statistical"
      />
      <SideBarItem
        icon={<RepeatIcon fontSize={"xs"} mx="2px" />}
        text="Jobs"
        url="/jobs"
      />
      <SideBarItem
        icon={<SettingsIcon fontSize={"xs"} mx="2px" />}
        text="PPM"
        url="/ppm"
      />
      <SideBarItem
        icon={<CalendarIcon fontSize={"xs"} mx="2px" />}
        text="Scheduler"
        url="/scheduler"
      />
      <SideBarItem
        icon={<ViewIcon fontSize={"xs"} mx="2px" />}
        text="Map"
        url=""
      />
      <SideBarItem
        icon={<ChatIcon fontSize={"xs"} mx="2px" />}
        text="Chat"
        url=""
      />
      <SideBarItem
        icon={<SunIcon fontSize={"xs"} mx="2px" />}
        text="Reports"
        url=""
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
          <>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              size="xs"
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth="1px">
                    Navigation
                  </DrawerHeader>
                  <DrawerBody>
                    <VStack spacing="24px" alignItems="start">
                      <NavItems />
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
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
