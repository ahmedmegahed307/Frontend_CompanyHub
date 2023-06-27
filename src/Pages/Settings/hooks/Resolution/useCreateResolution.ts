import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { Resolutions } from "../../../../models";

const useCreateResolution = (onCreate:()=>void) =>{
    const queryClient = useQueryClient();
    return useMutation<Resolutions,Error,Resolutions>(
        (resolution: Resolutions) =>
          DataStore.save(
            new Resolutions({ isActive: true, name: resolution.name })
          ),
        {
          //savedResoltion -> object from databse , newResoltion ->object we created
          onSuccess: (savedResolution, newResolution) => { 
            console.log(savedResolution);
            queryClient.invalidateQueries({
              queryKey: ["resolutionList"],
            });
            Swal.fire({
              title: "Congratulations",
              text: "Resolutions have been saved successfully",
              icon: "success",
            });
           onCreate();
          },
          onError: (error: any) => {
            console.log("error", error);
          },
        }
      );
}
export default useCreateResolution;