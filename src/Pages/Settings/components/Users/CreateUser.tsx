import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AbsoluteCenter,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  contactName: z.string().nonempty({ message: "Contact name is required" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  role: z.enum(["Admin", "Client", "Engineer"], {
    errorMap: () => ({
      message: "Role is required",
    }),
  }),
});

export type CreateUserValidation = z.infer<typeof schema>;
type UserFormProps = {
  onSubmit: (data: CreateUserValidation) => void;
};

const CreateUser = ({ onSubmit }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateUserValidation>({
    resolver: zodResolver(schema),
  });
  const handleFormSubmit = (data: CreateUserValidation) => {
    //console.log("user data", data);
    onSubmit(data);
    reset();
  };

  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <AbsoluteCenter>
            <Heading mb={6}>Create User</Heading>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormControl pb={5} w={"lg"} isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register("name")}
                  placeholder="Enter name"
                  autoFocus
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl pb={5} w={"lg"} isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input {...register("email")} placeholder="Enter email" />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl pb={5} w={"lg"} isInvalid={!!errors.contactName}>
                <FormLabel>Contact Name</FormLabel>
                <Input
                  {...register("contactName")}
                  placeholder="Enter contact name"
                />
                {errors.contactName && (
                  <FormErrorMessage>
                    {errors.contactName.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl pb={5} w={"lg"} isInvalid={!!errors.phoneNumber}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  {...register("phoneNumber")}
                  placeholder="Enter phone number"
                />
                {errors.phoneNumber && (
                  <FormErrorMessage>
                    {errors.phoneNumber.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl pb={5} w={"lg"} isInvalid={!!errors.role}>
                <FormLabel>Role</FormLabel>
                <Select {...register("role")} placeholder="Select role">
                  <option value="Admin">Admin</option>
                  <option value="Client">Client</option>
                  <option value="Engineer">Engineer</option>
                </Select>
                {errors.role && (
                  <FormErrorMessage>{errors.role.message}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                w={"full"}
                bg={"#294c58"}
                my={10}
                isLoading={isSubmitting}
                //isDisabled={!isValid}
              >
                Create User
              </Button>
            </form>
          </AbsoluteCenter>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default CreateUser;
