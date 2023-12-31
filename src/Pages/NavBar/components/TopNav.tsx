import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Menu,
  Heading,
  useDisclosure,
  VStack,
  MenuItem,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchInput from "../../SearchBar/components/SearchInput";
import { IconMessage } from "../../../assets/icons/IconMessage";
import moment from "moment";
import usePageTitleStore from "../../../hooks/NavBar/PageTitleStore";
import useAuthStore from "../../../hooks/Authentication/store";
import { MdLogout } from "react-icons/md";
//import NotificationPopover from "./NotificationPopover";

function TopNav() {
  const { isOpen, onClose } = useDisclosure();
  const { pageTitle } = usePageTitleStore();
  const navigate = useNavigate();
  const userStore = useAuthStore();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  const NavItems = () => (
    <>
      <Menu>
        {/* <NotificationPopover /> */}
        <IconButton
          as={NavLink}
          to="/chat"
          onClick={async () => {}}
          aria-label="message"
          icon={<IconMessage />}
          variant="ghost"
          fontSize="xl"
          marginRight={5}
          title="message"
          color={"Neutral.500"}
          _hover={{ bg: "none", color: "Primary.700" }}
        />
      </Menu>
    </>
  );

  return (
    <>
      <Box w={"full"} as="nav" py={5}>
        <Flex alignItems={"center"} px={5}>
          <VStack justify={"start"} alignItems={"start"}>
            <Heading fontWeight={"bold"} fontSize={"2xl"} color={"teal"}>
              {pageTitle ?? ""}
            </Heading>
            {pageTitle === "Dashboard Overview" && (
              <Heading fontSize={"md"} color={"Neutral.500"}>
                {moment(new Date().toLocaleDateString()).format(
                  "DD MMMM, dddd"
                )}
              </Heading>
            )}
          </VStack>
          <Spacer />

          <SearchInput />

          <NavItems />
        </Flex>
      </Box>
    </>
  );
}

export default TopNav;
