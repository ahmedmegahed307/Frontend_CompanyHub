import { useQueryClient, useMutation } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { JobTypesList } from "../../../../models";

const useJobTypeMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

  return useMutation<JobTypesList, Error, JobTypesList | string>(
    async (jobType: JobTypesList | string) => {
      if (isUpdate) {
        const original = await DataStore.query(
          JobTypesList,
          (jobType as JobTypesList).id || ""
        );

        if (original) {
          const updatedJobType = jobType as JobTypesList;
          return DataStore.save(
            JobTypesList.copyOf(original, (updated) => {
              Object.assign(updated, updatedJobType);
            })
          );
        }

        throw new Error("JobType not found");
      } else {
        const id = jobType as string;
        const original = await DataStore.query(JobTypesList, id);
        console.log("original", original);
        if (original) {
          return DataStore.save(
            JobTypesList.copyOf(original, (updated) => {
              updated.isActive = false;
            })
          );
        }

        throw new Error("JobType not found");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["jobTypeList"],
        });
        Swal.fire({
          title: "Success",
          text: isUpdate
            ? "Job Type has been updated successfully"
            : "Job Type has been deleted successfully",
          icon: "success",
        });
        onUpdateOrDelete();
      },
      onError: (error: any) => {
        console.log("errorssss", error);
      },
    }
  );
};

export default useJobTypeMutation;
