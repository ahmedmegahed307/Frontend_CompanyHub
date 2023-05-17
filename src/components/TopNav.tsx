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
  Image
} from "@chakra-ui/react";
import { MdSettings } from 'react-icons/md'
import { HamburgerIcon } from "@chakra-ui/icons";

function TopNav() {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItems = () => (
    <>
     <IconButton aria-label='Search database' icon={<MdSettings />} />
    </>
  );

  return (
    <>
      <Box as="nav" bg={"gray.100"} py={2}>
        <Flex alignItems="center" maxW="7xl" mx="auto" px="4">
          {/* <Text fontSize="2xl" fontWeight="bold">
          <Link href="/">YourLogo</Link>
        </Text> */}
           <Image
        p={1}
        w={150}
        src="../src/assets/img/uk_field_service_darkblue-darkblue-premium.svg"
        alt="Dan Abramov"
      />
          <Spacer />
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
