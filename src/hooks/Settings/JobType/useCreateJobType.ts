import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {
  JobType,
  createJobType,
} from "../../../services/JobTypeService/jobtype-service";

const useCreateJobType = (onCreate: () => void) => {
  const queryClient = useQueryClient();

  const createJobTypeMutation = useMutation<JobType, Error, JobType>(
    createJobType.post,
    {
      onSuccess: (savedJobType) => {
        queryClient.invalidateQueries(["jobTypesList"]);

        Swal.fire({
          title: "Congratulations",
          text: "JobTypes have been saved successfully",
          icon: "success",
        });

        onCreate();
        return savedJobType;
      },
      onError: (error) => {
        console.log("error", error);
        throw new Error("Failed to create JobType");
      },
    }
  );

  const createJobTypeFn = async (newJobType: JobType) => {
    await createJobTypeMutation.mutateAsync(newJobType);
  };

  return createJobTypeFn;
};

export default useCreateJobType;
