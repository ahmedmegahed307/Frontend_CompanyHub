import {
  AbsoluteCenter,
  Image,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
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
                  Reset Password
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
              
                      <Button
    onClick={() => {
      navigate("/login");  

    }}                        colorScheme="blue"
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
                      navigate("/login");  

                    }}
                    colorScheme="blue"
                    w={"full"}
                    color={"#294c58"}
                    size={"sm"}
                  >
                   Back to sign in
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

export default ForgotPassword;
