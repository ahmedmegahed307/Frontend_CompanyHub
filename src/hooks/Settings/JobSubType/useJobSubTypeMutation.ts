import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {
  JobSubType,
  JobSubTypeMutationAPI,
} from "../../../services/JobSubTypesService/jobsubtype-service";

const useJobSubTypeMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

  return useMutation<JobSubType, Error, JobSubType | number>(
    async (JobSubType: JobSubType | number) => {
      if (isUpdate) {
        const id = (JobSubType as JobSubType).id;
        return JobSubTypeMutationAPI.update(id, JobSubType);
      } else {
        const id = JobSubType as number;
        return JobSubTypeMutationAPI.delete(id);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["jobSubTypesList"],
        });
        Swal.fire({
          title: "Success",
          text: isUpdate
            ? "JobSubType has been updated successfully"
            : "JobSubType has been Deleted successfully",
          icon: "success",
        });
        onUpdateOrDelete();
      },
      onError: (error: any) => {
        console.log("JobSubTypeError:", error);
      },
    }
  );
};

export default useJobSubTypeMutation;
