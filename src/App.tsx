import "./App.css";
import {
  Box,
  Button,
  Text,
  Card,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Spinner,
  VStack,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
} from "@chakra-ui/react";

import TopNav from "./Pages/NavBar/components/TopNav";
import SideBar from "./Pages/SideBar/components/SideBar";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./Pages/Authentication/components/Login";
import { AddIcon } from "@chakra-ui/icons";
import { FluentBot_24Regular } from "./assets/icons/IconFluentBot_24Regular";
import { LogoSVG } from "./assets/icons/logoSVG";
import { IconBillOn } from "./assets/icons/IconBillOn";
import { color } from "framer-motion";
import { IconChatSend } from "./assets/icons/IconChatSend";
import { IconChatSendDisabled } from "./assets/icons/IconChatSendDisabled";

import { set } from "date-fns";
import userService from "./services/UserService/userService";
import useAuthStore from "./Pages/Authentication/hooks/store";

function App() {
  // const { setIsCreateModalOpen } = useUserStore();
  // const { setIsClientCreateModalOpen } = useClientStore();

  const [incognitoUser, setIncognitoUser] = useState();

  const [loading, setLoading] = useState(true);

  const [showRobotChat, setShowRobotChat] = useState(false);

  const [token, setToken] = useState("");
  const user = useAuthStore();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      handleUserStore();
      setToken(token);
    }
  }, []);

  const handleUserStore = () => {
    setLoading(true);
    userService.getCurrentUser().then((res) => {
      user.setUser(res);
      setLoading(false);
    });
  };

  //xsadasd

  return (
    <>
      <HStack spacing={0} align="start">
        <SideBar />
        <VStack w={"full"}>
          <TopNav />

          <Box h="90vh" w="81.4vw" overflowX="hidden">
            <Outlet />
          </Box>
        </VStack>
      </HStack>
      {/* bg={'Secondary.600'}  */}

      <HStack spacing={2} position="fixed" bottom={9} right={9} zIndex={1000}>
        <Popover>
          <PopoverTrigger>
            <Button leftIcon={<AddIcon />}> Add</Button>
          </PopoverTrigger>
          <PopoverContent border={"none"} w={40}>
            <PopoverArrow />

            <PopoverBody>
              <VStack>
                <Link to="/job/addjob" target="_blank">
                  <Button w={100} variant={"outline"}>
                    Job
                  </Button>
                </Link>
                <Link to="/settings/clients/clientsList">
                  <Button
                    w={100}
                    variant="outline"
                    //  onClick={() => setIsClientCreateModalOpen(true)}
                  >
                    Client
                  </Button>
                </Link>
                <Link to="/settings/users/usersList">
                  <Button
                    w={100}
                    variant="outline"
                    //  onClick={() => setIsCreateModalOpen(true)}
                  >
                    User
                  </Button>
                </Link>
                <Link to="/ppm/contracts/addContract" target="_blank">
                  <Button w={100} variant={"outline"}>
                    Contract
                  </Button>
                </Link>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {!showRobotChat && (
          <Button
            color={"Primary.700"}
            bg={"Auxiliary.600"}
            fontSize={"3xl"}
            onClick={() => setShowRobotChat(true)}
          >
            <FluentBot_24Regular />{" "}
          </Button>
        )}
        {showRobotChat && (
          <Button
            color={"Primary.700"}
            bg={"Auxiliary.600"}
            fontSize={"3xl"}
            onClick={() => setShowRobotChat(false)}
          >
            {" "}
            <CloseButton />
          </Button>
        )}
      </HStack>
    </>
  );
}

export default App;
