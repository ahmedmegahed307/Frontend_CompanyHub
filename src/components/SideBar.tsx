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
  Link,
} from "@chakra-ui/react";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { MdInfo, MdInfoOutline } from "react-icons/md";

function TopNav() {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItems = () => (
    <>
      <VStack spacing={1} m={0} align={"start"}>
        <SideBarItem text="Operational" url="/operational" />
        <SideBarItem text="Statistical Dashboard" url="/statistical" />
        <SideBarItem text="Jobs" url="/jobs" />
        <SideBarItem text="PPM" url="/ppm" />
        <SideBarItem text="Scheduler" url="/scheduler" />
        <SideBarItem text="Map" url="" />
        <SideBarItem text="Chat" url="" />
        <SideBarItem text="Reports" url="" />
      </VStack>
    </>
  );

  return (
    <>
      <Box
        borderRight="1px solid "
        h={"92vh"}
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
            <Flex direction={"column"} alignItems="center">
              <NavItems />
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default TopNav;

interface Pros {
  text: string;
  url: string;
}

export const SideBarItem = ({ text, url }: Pros) => {
  return (
    <>
      <Link
        w={"full"}
        as={NavLink}
        fontWeight={"bold"}
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
        to={url!}
        px={5}
        py={2}
        borderRadius={"lg"}
      >
        <AddIcon fontSize={"xs"} mx="2px" /> {text}
      </Link>
    </>
  );
};
