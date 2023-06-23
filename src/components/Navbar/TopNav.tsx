import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Spacer,
  Image,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Heading,
} from "@chakra-ui/react";
import { MdHelpOutline, MdLogout, MdSettings } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import SearchInput from "../SearchBar/SearchInput";
import { FaUserCircle } from "react-icons/fa";
interface Props {
  onSearch: (searchText: string) => void;
}
function TopNav({ onSearch }: Props) {
  const isMobileNav = useBreakpointValue({ base: true, lg: false });

  const NavItems = () => (
    <>
      <Menu>
        <IconButton
          as={Link}
          to="/settings/user/info"
          aria-label="User Profile"
          icon={<FaUserCircle />}
          variant="ghost"
          fontSize="xl"
          marginRight={2}
          marginLeft={10}
        />
        <IconButton
          aria-label="Help"
          icon={<MdHelpOutline />}
          variant="ghost"
          fontSize="xl"
          marginRight={2}
        />
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdSettings />}
          variant="ghost"
          fontSize="xl"
          marginRight={2}
          title="Settings"
        />
        <MenuList>
          <MenuItem as={NavLink} to="/settings/checkLists">
            CheckLists
          </MenuItem>{" "}
          <MenuItem as={NavLink} to="/settings/clients/clientsList">
            Clients
          </MenuItem>
          <MenuItem as={NavLink} to="/settings/jobtype/list">
            Job Types
          </MenuItem>
          <MenuItem as={NavLink} to="/settings/users/usersList">
            Users
          </MenuItem>
          <MenuItem as={NavLink} to="/settings/resolution/list">
            Standard Resolutions
          </MenuItem>
          <MenuItem as={NavLink} to="/settings/company/info">
            Manage Company
          </MenuItem>
        </MenuList>
        <IconButton
          aria-label="Logout"
          icon={<MdLogout />}
          variant="ghost"
          fontSize="xl"
          marginRight={2}
          title="Logout"
        />
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
            <Image
              src="/src/assets/img/uk_field_service_darkblue-darkblue-premium.svg"
              title="logo"
            ></Image>
          </Box>

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
