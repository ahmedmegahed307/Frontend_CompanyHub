import {
  AbsoluteCenter,
  Image,
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <HStack w={"full"}>
        <Box
          h={"100vh"}
          w={"60vw"}
          bgSize={"cover"}
          bgImage={
            "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
          }
        >
          <Image p={10} w={300} src="src/assets/img/logow.svg" alt="" />
        </Box>
        <Center w={"40vw"}>
          <VStack spacing={5}>
            <Heading size={"md"}>Login to your account</Heading>
            <Text fontSize={"sm"} size={"sm"} color={"gray"}>
              Enter your email below to login yo account
            </Text>
            <FormControl w={"sm"}>
              {/* <FormLabel> Email Address</FormLabel> */}
              <Input
                className="FormControl"
                placeholder="Enter your email address..."
              />
            </FormControl>
            <FormControl w={"sm"}>
              {/* <FormLabel>Password</FormLabel> */}
              <Input
                type="password"
                className="FormControl"
                placeholder="Enter your password..."
              />
            </FormControl>
            <Button
              onClick={() => {
                navigate("/jobs");
              }}
              colorScheme="blue"
              w={"full"}
              bg={"#416D77"}
            >
              Sign in
            </Button>
          </VStack>
        </Center>
      </HStack>
    </>
  );
};

export default Login;
