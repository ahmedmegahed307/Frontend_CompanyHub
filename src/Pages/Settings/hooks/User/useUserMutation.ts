import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UsersObject } from "./useUser";


const useUserMutation = (onUpdateOrDelete: () => void, isUpdate: boolean) => {
    const queryClient = useQueryClient();
  
    return useMutation<UsersObject, Error, UsersObject | string>(
   
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["userList"],
          });
          Swal.fire({
            title: "Success",
            text: isUpdate
              ? "User has been updated successfully"
              : "User has been Deactivated successfully",
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
  
  export default useUserMutation;
  