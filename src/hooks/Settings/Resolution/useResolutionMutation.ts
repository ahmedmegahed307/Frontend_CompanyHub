import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Resolution from "../../../models/Resolution";
import resolutionService from "../../../services/ResolutionService/resolutionService";
import useAuthStore from "../../Authentication/store";

const useResolutionMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseData, Error, Resolution | number>(
    async (resolution: Resolution | number): Promise<ResponseData> => {
      if (isUpdate) {
        const id = (resolution as Resolution).id;
        return await resolutionService.updateResolution(id, resolution);
      } else {
        const id = resolution as number;
        return await resolutionService.deleteResolution(id);
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
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      },
    }
  );
};

export default useResolutionMutation;
