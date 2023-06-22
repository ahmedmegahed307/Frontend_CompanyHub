import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { Resolutions } from "../../../models";

const useResolutionMutation = (
  onUpdateOrDelete: () => void,
  isUpdate: boolean
) => {
  const queryClient = useQueryClient();

  return useMutation<Resolutions, Error, Resolutions | string>(
    async (resolution: Resolutions | string) => {
      if (isUpdate) {
        const original = await DataStore.query(
          Resolutions,
          (resolution as Resolutions).id || ""
        );

        if (original) {
          return DataStore.save(
            Resolutions.copyOf(original, (updated) => {
              updated.name = (resolution as Resolutions).name;
            })
          );
        }

        throw new Error("Resolution not found");
      } else {
        const id = resolution as string;
        const original = await DataStore.query(Resolutions, id);

        if (original) {
          return DataStore.save(
            Resolutions.copyOf(original, (updated) => {
              updated.isActive = false;
            })
          );
        }

        throw new Error("Resolution not found");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["resolutionList"],
        });
        Swal.fire({
          title: "Success",
          text: isUpdate
            ? "Resolution has been updated successfully"
            : "Resolution has been deleted successfully",
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

export default useResolutionMutation;
