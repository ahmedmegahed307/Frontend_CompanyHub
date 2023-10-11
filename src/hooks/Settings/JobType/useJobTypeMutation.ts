import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {
  JobType,
  JobTypeMutationAPI,
} from "../../../services/JobTypeService/jobtype-service";

const useJobTypeMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

  return useMutation<JobType, Error, JobType | number>(
    // async (jobType: JobType | number) => {
    //   // if (isUpdate) {
    //   //   const id = (jobType as JobType).id;
    //   //   return JobTypeMutationAPI.update(id, jobType);
    //   // } else {
    //   //   const id = jobType as number;
    //   //   return JobTypeMutationAPI.delete(id);
    //   // }
    // },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["jobTypesList"],
        });
        Swal.fire({
          title: "Success",
          text: isUpdate
            ? "JobType has been updated successfully"
            : "JobType has been Deleted successfully",
          icon: "success",
        });
        onUpdateOrDelete();
      },
      onError: (error: any) => {
        console.log("JobTypeError:", error);
      },
    }
  );
};

export default useJobTypeMutation;
