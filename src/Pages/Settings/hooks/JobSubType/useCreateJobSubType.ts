import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { JobSubType,createJobSubType } from "../../../../services/JobSubTypesService/jobsubtype-service";

const useCreateJobSubType = (onCreate: () => void) => {
  const queryClient = useQueryClient();

  const createJobSubTypeMutation = useMutation<JobSubType, Error, JobSubType>(createJobSubType.post, {
    onSuccess: (savedJobSubType) => {
      queryClient.invalidateQueries(["jobSubTypesList"]);

      Swal.fire({
        title: "Congratulations",
        text: "JobSubType have been saved successfully",
        icon: "success",
      });

      onCreate();
      return savedJobSubType;
    },
    onError: (error) => {
      console.log("error", error);
      throw new Error("Failed to create JobSubType");
    },
  });

  const createJobSubTypeFn = async (newJobSubType: JobSubType) => {
    await createJobSubTypeMutation.mutateAsync(newJobSubType);
  };

  return createJobSubTypeFn;
};

export default useCreateJobSubType;
