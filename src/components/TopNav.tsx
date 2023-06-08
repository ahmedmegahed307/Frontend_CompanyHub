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
  Spacer,
  Image,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  HStack,
  Heading,
  Input,
  Link,
  Container,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import SearchInput from "./SearchBar/SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
function TopNav({ onSearch }: Props) {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItems = () => (
    <>
      {/* <IconButton aria-label='Search database' icon={<MdSettings />} /> */}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdSettings />}
          variant="ghost"
          marginRight={5}
          marginLeft={250}
        />
        <MenuList>
          <MenuItem as={NavLink} to="/checkLists">
            CheckLists
          </MenuItem>{" "}
          <MenuItem as={NavLink} to="/clients/clientsList">
            Clients
          </MenuItem>
          <MenuItem as={NavLink} to="/jobtype/list">
            Job Types
          </MenuItem>
          <MenuItem as={NavLink} to="/users/usersList">
            Users
          </MenuItem>
          <MenuItem as={NavLink} to="/resolution/list">
            Standard Resolutions
          </MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );

  return (
    <>
      <Box w={"full"} as="nav" border="1px" borderColor="gray.200" py={2}>
        <Flex alignItems={"center"} px={5}>
          {/* <Text fontSize="2xl" fontWeight="bold">
            <Link href="/">YourLogo</Link>
          </Text> */}
          <Box>
            <Image src="src/assets/img/fav.svg"></Image>
          </Box>
          <Heading mx={2} size={"lg"}>
            UK Field Service
          </Heading>
          {/* <HStack mx={5} spacing={5}>
            <Link
              as={NavLink}
              _activeLink={{ fontWeight: "bold", color: "#294c58" }}
              to="/home"
              fontSize={"sm"}
              color={"gray"}
            >
              Home
            </Link>
            <Link
              as={NavLink}
              _activeLink={{ fontWeight: "bold", color: "#333" }}
              to="/table-example"
              fontSize={"sm"}
              color={"gray"}
            >
              Table One
            </Link>{" "}
            <Link
              as={NavLink}
              _activeLink={{ fontWeight: "bold", color: "#333" }}
              to="/form-example"
              fontSize={"sm"}
              color={"gray"}
            >
              Form One
            </Link>{" "}
            <Link fontSize={"sm"} color={"gray"}>
              Documentation
            </Link>
          </HStack> */}
          <Spacer />

          {/* <Input
            type="text"
            size={"sm"}
            w={"60"}
            mx={5}
            borderRadius={"md"}
            placeholder="Search.."
          /> */}
          <SearchInput onSearch={onSearch} />

          <NavItems />
          {/* {isMobileNav ? (
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
          )} */}
        </Flex>
      </Box>
    </>
  );
}

export default TopNav;
