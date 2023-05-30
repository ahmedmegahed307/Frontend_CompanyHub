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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <HStack bg={"gray.50"}>
        <Box>
          <VStack h={"100vh"}>
            <Box>
              <Image
                m={16}
                w={250}
                src="src/assets/img/uk_field_service_darkblue-darkblue-premium.svg"
                alt="UKFS"
              />

              <AbsoluteCenter>
                <Box>
                  <Heading size={"lg"} py={10} textAlign={"center"}>
                    Sign in to your account
                  </Heading>
                  <Card p={10} variant={"unstyled"}>
                    <CardBody>
                      <FormControl pb={5} w={"lg"}>
                        <FormLabel> Email Address</FormLabel>
                        <Input
                          className="FormControl"
                          placeholder="Enter your email address..."
                        />
                      </FormControl>
                      <FormControl pb={10} w={"lg"}>
                        <FormLabel>Password</FormLabel>
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
                        bg={"#294c58"}
                      >
                        Sign in
                      </Button>
                    </CardBody>
                  </Card>

                  <Button
                    py={10}
                    variant="link"
                    onClick={() => {
                      navigate("/forgotPassword");
                    }}
                    colorScheme="blue"
                    w={"full"}
                    color={"#294c58"}
                    size={"sm"}
                    type="button"
                  >
                    I've forgotten my password{" "}
                  </Button>
                </Box>
              </AbsoluteCenter>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </>
  );
};

export default Login;
