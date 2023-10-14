import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Image,
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  VStack,
  Text,
  Center,
  FormLabel,
  IconButton,
  Spacer,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LogoSVG } from "../../../assets/icons/logoSVG";
import authService from "../../../services/AuthService/authService";
import userService from "../../../services/UserService/userService";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    verificationcode: "",
  });

  const [display, setDisplay] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [inputError, setInputError] = useState({
    email: false,
    password: false,
    verificationcode: false,
  });

  const isValidEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleLogin = async () => {
    let errors = { email: false, password: false, verificationcode: false };

    if (!user.email || !isValidEmail(user.email)) {
      errors.email = true;
    }

    if (!user.password) {
      errors.password = true;
    }

    setInputError(errors);
    if (errors.email || errors.password) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = await authService.login(user.email, user.password);
      console.log(token);
      if (token) {
        sessionStorage.setItem("token", token);
        userService.getCurrentUser().then((res) => {
          if (res.userRole.role === "Admin") {
            location.href = "/";
          } else {
            sessionStorage.removeItem("token");
            setIsLoading(false);
            setErrorMessage("You are not authorized to access.");
          }
        });
      }
    } catch (e: any) {
      setIsLoading(false);
      setErrorMessage(
        e.response?.data.message ?? "Email or Password is incorrect"
      );
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      display === "login" ? handleLogin() : handleResetPassword();
    }
  };

  const handleResetPassword = async () => {
    if (!isValidEmail(user.email)) {
      setInputError({ ...inputError, email: true });
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const code = await authService.forgotPassword(user.email);
      if (code === 200) {
        setIsLoading(false);
        setDisplay("confirmcode");
        setTimeout(() => {
          setIsLoading(false);
          setSuccessMessage("We have sent guard code to your email");
        }, 2000);
      }
    } catch (e: any) {
      setIsLoading(false);
      setDisplay("login");
      setErrorMessage("Failed to reset password.");
    }
  };

  const handleConfirmCode = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const code = await authService.confirmCode(
        user.email,
        user.verificationcode
      );
      if (code === 200) {
        setIsLoading(false);
        setDisplay("resetpassword");
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } catch (e: any) {
      setIsLoading(false);
      setErrorMessage("Wrong code.");
    }
  };

  const handleChangePassword = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const code = await authService.resetPassword(
        user.email,
        user.password,
        user.verificationcode
      );
      if (code === 200) {
        setIsLoading(false);
        setDisplay("login");
        setTimeout(() => {
          setSuccessMessage("Password changed successfully.");
          setIsLoading(false);
        }, 2000);
      }
    } catch (e: any) {
      setIsLoading(false);
      setErrorMessage("Failed to change password.");
    }
  };
  return (
    <>
      <HStack w={"full"}>
        <Box h={"100vh"} w={"70vw"} bgSize={"cover"} bg={"Primary.50"} p={5}>
          <VStack justify={"start"} alignItems={"start"}>
            <LogoSVG></LogoSVG>
            <VStack w={"full"}>
              <Image mb={-32} src={"src/assets/img/loginImage.svg"} alt="" />

              <Heading>View the report of all types of calls</Heading>
            </VStack>
          </VStack>
        </Box>

        {display == "login" ? (
          <Center w={"30vw"}>
            <VStack align={"start"} spacing={5}>
              <Heading textAlign={"start"} fontWeight={"black"} size={"lg"}>
                Login
              </Heading>
              <Text fontSize={"sm"}>
                Welcome back, please login to your account.
              </Text>
              <FormControl
                w={"sm"}
                color={"#1396ab"}
                isInvalid={inputError.email}
              >
                <HStack>
                  <Input
                    className="FormControl"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e: any) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                      });
                      setInputError({ ...inputError, email: false });
                    }}
                    borderColor={inputError.email ? "red.300" : "gray.500"}
                    onKeyDown={handleKeyDown}
                  />
                </HStack>
              </FormControl>
              <FormControl
                w={"sm"}
                color={"#1396ab"}
                isInvalid={inputError.password}
              >
                <HStack>
                  <Input
                    color={"black"}
                    type="password"
                    className="FormControl"
                    placeholder="Enter your password..."
                    value={user.password}
                    onChange={(e: any) => {
                      setUser({
                        ...user,
                        password: e.target.value,
                      });
                      setInputError({ ...inputError, password: false });
                    }}
                    onKeyDown={handleKeyDown}
                    borderColor={inputError.password ? "red.300" : "gray.500"}
                  />
                </HStack>
              </FormControl>
              <HStack justify={"end"} w={"full"}>
                <Link to="/forgotPassword">
                  <Text fontSize={"sm"} color={"#1396ab"}>
                    Forgot your password?
                  </Text>
                </Link>
              </HStack>
              {errorMessage && (
                <Alert status="error" color="#444" borderRadius={4}>
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              )}

              {successMessage && (
                <Alert status="success" color="#444" borderRadius={4}>
                  <AlertIcon />
                  {successMessage}
                </Alert>
              )}
              <Spacer></Spacer>
              <Button
                w={"full"}
                onClick={handleLogin}
                mt={-3}
                isLoading={isLoading}
                loadingText="Logging in"
                spinner={<Spinner color="#F0F1F3" />}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign in
              </Button>
              <HStack w={"full"}>
                <Text fontSize={"sm"}>Don’t you have an account?</Text>
                <Link to="/signup">
                  <Text fontSize={"sm"} color={"#1396ab"}>
                    Create an account
                  </Text>
                </Link>
              </HStack>
            </VStack>
          </Center>
        ) : (
          ""
        )}
        {display == "confirm" ? (
          <Center w={"40vw"}>
            <VStack spacing={5}>
              <Heading size={"md"}>Confirm Your Account</Heading>
              <Text fontSize={"sm"} size={"sm"} color={"gray"}>
                Enter your confirm code
              </Text>
              <FormControl w={"sm"}>
                {/* <FormLabel> Email Address</FormLabel> */}
                <Input
                  className="FormControl"
                  placeholder="Enter your email address..."
                  value={user.verificationcode}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      verificationcode: e.target.value,
                    })
                  }
                />
              </FormControl>

              <Button colorScheme="blue" w={"full"} bg={"black"}>
                Send
              </Button>
            </VStack>
          </Center>
        ) : (
          ""
        )}
      </HStack>
    </>
  );
};

export default Login;
