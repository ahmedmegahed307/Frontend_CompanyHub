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
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

const schema = z.object({
  name: z.string().min(3, { message: "JobType must be at least 3 characters" }),
  jobSubTypeId: z.string().min(1, { message: "Job Subtype is required" }),
});
export type FormCreateValidation = z.infer<typeof schema>;

type JobTypeFormProps = {
  onSubmit: (data: FormCreateValidation) => void;
};

const CreateJobType = ({ onSubmit }: JobTypeFormProps) => {
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
    console.log("tester", data);
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
              <FormControl pb={5} w={"lg"} isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register("name")}
                  className="FormControl"
                  placeholder=""
                />
                {errors.name && (
                  <FormErrorMessage color="red">
                    {errors.name.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl pb={5} w={"lg"} isInvalid={!!errors.jobSubTypeId}>
                <FormLabel>Job SubTypes</FormLabel>

                <Select
                  {...register("jobSubTypeId")}
                  placeholder="Select Job SubType"
                >
                  <option>test</option>
                </Select>
                {errors.jobSubTypeId && (
                  <FormErrorMessage>
                    {errors.jobSubTypeId.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <Button type="submit" w={"full"} my={10}>
                Submit
              </Button>
            </form>
          </AbsoluteCenter>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default CreateJobType;
