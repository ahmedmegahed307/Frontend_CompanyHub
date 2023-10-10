import { LockIcon } from "@chakra-ui/icons";
import {
  Image,
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  VStack,
  Center,
  IconButton,
  Select,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Company from "../../../models/Company";
import { LogoSVG } from "../../../assets/icons/logoSVG";
import RequiredFormLabel from "../../RequiredFields/RequiredFormLabel";
import { CompanySize } from "../../../models/Enums/CompanySize";
import authService from "../../../services/AuthService/authService";
import SignUpModel from "../../../models/SignUp";
const schema = z.object({
  companyName: z
    .string()
    .min(3, { message: "Company Name must be at least 3 characters" }),
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters" }),
  email: z.string().email().min(1, { message: "Invalid email" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(1, { message: "Passwords aren't identical" }),
  companySize: z.string().min(1, { message: "Company Size is Required" }),
});
export type SignUpValidation = z.infer<typeof schema>;
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignUpValidation>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: SignUpValidation) => {
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords aren't identical",
        icon: "error",
      });
      return;
    }
    try {
      const signupData = new SignUpModel(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.companyName,
        true // assuming isActive is true for new signups
      );

      const response = await authService.signup(signupData);
      if (response.code === 200) {
        Swal.fire({
          title: "Success",
          text: "Signed up successfully",
          icon: "success",
        });
        setTimeout(() => {
          location.href = "/login";
        }, 2000);
      }

      console.log("response:", response);
      reset();
    } catch (error) {
      console.log("error signing up:", error);
      const errorMessage =
        (error as any).response?.data?.message || "Something went wrong!";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
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

        <Center w={"30vw"}>
          <VStack spacing={5}>
            <Heading size={"md"} color={"teal"}>
              Sign up for free trial!
            </Heading>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormControl w={"sm"} isInvalid={!!errors.companyName}>
                <RequiredFormLabel label="Company Name" />
                <Input type="text" {...register("companyName")} />
                {errors.companyName && (
                  <FormErrorMessage color="red">
                    {errors.companyName.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl w={"sm"} mt={5} isInvalid={!!errors.firstName}>
                <RequiredFormLabel label="First Name" />
                <Input type="text" {...register("firstName")} />
                {errors.firstName && (
                  <FormErrorMessage color="red">
                    {errors.firstName.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl w={"sm"} mt={5} isInvalid={!!errors.lastName}>
                <RequiredFormLabel label="Last Name" />
                <Input type="text" {...register("lastName")} />
                {errors.lastName && (
                  <FormErrorMessage color="red">
                    {errors.lastName.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                w={"sm"}
                color={"#1396ab"}
                mt={5}
                isInvalid={!!errors.email}
              >
                <HStack>
                  <Input
                    color={"black"}
                    className="FormControl"
                    placeholder="enter  email address..."
                    {...register("email")}
                  />
                </HStack>
                {errors.email && (
                  <FormErrorMessage color="red">
                    {errors.email.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                w={"sm"}
                color={"#1396ab"}
                mt={5}
                isInvalid={!!errors.password}
              >
                {" "}
                <HStack>
                  <Input
                    color={"black"}
                    type="password"
                    className="FormControl"
                    placeholder="Enter your password..."
                    {...register("password")}
                  />
                </HStack>
                {errors.password && (
                  <FormErrorMessage color="red">
                    {errors.password.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                w={"sm"}
                color={"#1396ab"}
                mt={5}
                isInvalid={!!errors.confirmPassword}
              >
                <HStack>
                  <Input
                    color={"black"}
                    type="password"
                    className="FormControl"
                    placeholder="confirm password"
                    {...register("confirmPassword")}
                  />
                </HStack>
                {errors.confirmPassword && (
                  <FormErrorMessage color="red">
                    {errors.confirmPassword.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                pb={5}
                w={"sm"}
                mt={5}
                isInvalid={!!errors.companySize}
              >
                <Select
                  placeholder="--Select company size--"
                  {...register("companySize")}
                >
                  <option value={CompanySize.UP_TO_5_USERS}>
                    Up to 5 users
                  </option>
                  <option value={CompanySize.UP_TO_10_USERS}>
                    Up to 10 users
                  </option>
                  <option value={CompanySize.UP_TO_11_PLUS_USERS}>
                    11+ users
                  </option>
                </Select>
                {errors.companySize && (
                  <FormErrorMessage color="red">
                    {errors.companySize.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                w={"full"}
                bg={"Primary.700"}
                mt={5}
              >
                Sign Up
              </Button>
            </form>
            <Link to="/login">
              <Text color={"#1396ab"}>Already have an account?</Text>
            </Link>
          </VStack>
        </Center>
      </HStack>
    </>
  );
};

export default SignUp;
