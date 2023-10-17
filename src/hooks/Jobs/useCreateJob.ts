import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { createJob } from "../../services/jobService/jobService";
import { Job } from "../../models/Job";

const useCreateJob = (OnClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseData, Error, Job>(
    async (job: Job): Promise<ResponseData> => {
      return await createJob(job);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["jobsList"],
        });

        Swal.fire({
          title: "Success",
          text: "Job has been Created successfully!",
          icon: "success",
        });
        OnClose();
      },
      onError: (error: any) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      },
    }
  );
};

export default useCreateJob;
