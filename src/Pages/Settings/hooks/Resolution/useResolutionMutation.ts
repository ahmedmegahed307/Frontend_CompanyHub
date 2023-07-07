import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResolutionMutationAPI, Resolutions } from "../../../../services/ResolutionService/resolution-service";
import Swal from "sweetalert2";

const useResolutionMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

  return useMutation<Resolutions, Error, Resolutions | number>(
    async (resolution: Resolutions | number) => {
      if (isUpdate) {
        const id = (resolution as Resolutions).id;
        return ResolutionMutationAPI.update(id, resolution);
      } else {
        const id = resolution as number;
        return ResolutionMutationAPI.delete(id);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["resolutionList"],
        });
        // handle success
        Swal.fire({
          title: "Success",
          text: isUpdate
            ? "Resolution has been updated successfully!"
            : "Resolution has been deleted successfully!",
          icon: "success",
        });
        onUpdateOrDelete();
      },
      onError: (error: any) => {
        console.log("errorssss", error);
        // handle error
      },
    }
  );
};

export default useResolutionMutation;
