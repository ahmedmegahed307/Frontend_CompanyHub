import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Menu,
  Heading,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import SearchInput from "../../SearchBar/components/SearchInput";
import { IconMessage } from "../../../assets/icons/IconMessage";
//import usePageTitleStore from "../hooks/PageTitleStore";
import moment from "moment";
//import NotificationPopover from "./NotificationPopover";

function TopNav() {
  const { isOpen, onClose } = useDisclosure();
  //const { pageTitle } = usePageTitleStore();

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
              {"title" ?? ""}
            </Heading>
            { "Dashboard Overview" && (
              <Heading fontSize={"md"} color={"Neutral.500"}>
                {moment(new Date().toLocaleDateString()).format(
                  "DD MMMM, dddd"
                )}
              </Heading>
            )}
          </VStack>
          <Spacer />

          <SearchInput  />

          <NavItems />
        </Flex>
      </Box>
     
    </>
  );
}

export default TopNav;
