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
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Resolution must be at least 3 characters" }),
});
export type FormCreateValidation = z.infer<typeof schema>;

type ResolutionFormProps = {
  onSubmit: (data: FormCreateValidation) => void;
};

const CreateResolution = ({ onSubmit }: ResolutionFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormCreateValidation>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: FormCreateValidation) => {
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
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormControl pb={5} w={"lg"}>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register("name")}
                  className="FormControl"
                  placeholder=""
                />
                {errors.name && <Text color="red">{errors.name.message}</Text>}
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                w={"full"}
                bg={"#294c58"}
                my={10}
                //isDisabled={!isValid}
              >
                Submit
              </Button>
            </form>
          </AbsoluteCenter>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default CreateResolution;
