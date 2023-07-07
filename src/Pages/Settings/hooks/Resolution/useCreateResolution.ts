import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Resolutions, createResolution } from "../../../../services/ResolutionService/resolution-service";

const useCreateResolution = (onCreate: () => void) => {
  const queryClient = useQueryClient();

  const createResolutionMutation = useMutation<Resolutions, Error, Resolutions>(createResolution.post, {
    onSuccess: (savedResolution) => {
      queryClient.invalidateQueries(["resolutionList"]);

      Swal.fire({
        title: "Congratulations",
        text: "Resolutions have been saved successfully",
        icon: "success",
      });

      onCreate();
      return savedResolution;
    },
    onError: (error) => {
      console.log("error", error);
      throw new Error("Failed to create resolution");
    },
  });

  const createResolutionFn = async (newResolution: Resolutions) => {
    await createResolutionMutation.mutateAsync(newResolution);
  };

  return createResolutionFn;
};

export default useCreateResolution;
