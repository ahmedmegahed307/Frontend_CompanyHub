import {
  Box,
  Flex,
  Text,
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
  Spacer,
  Image,
  Link
  
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {  NavLink } from "react-router-dom";

function TopNav() {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItems = () => (
    <>
    <Link px={5}>Operational Dashboard</Link>
    <Link px={5}>Statistical Dashboard</Link>
    <Link as={NavLink} _activeLink={{ fontWeight:"bold",color:'#294c58'}} to='/jobs' px={5}>Jobs </Link>
    <Link px={5}>PPM </Link>
    <Link px={5}>Scheduler </Link>
    <Link px={5}>Map </Link>
    <Link px={5}>Chat </Link>
    <Link px={5}>Reports </Link>
    
    </>
  );

  return (
    <>
    
      <Box boxShadow={'lg'}  as="nav" py={2}>
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
            <Flex alignItems="center">
              <NavItems />
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default TopNav;
