import { useQueryClient, useMutation } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { UsersObject } from "../../../models";

const useUserMutation = (onUpdateOrDelete: () => void, isUpdate: boolean) => {
    const queryClient = useQueryClient();
  
    return useMutation<UsersObject, Error, UsersObject | string>(
      async (user: UsersObject | string) => {
     
          const id = user as string;
          const original = await DataStore.query(UsersObject, id);
          console.log("original", original);
          
          if (original) {
            return DataStore.delete(original);
          }
  
          throw new Error("User not found");
        
      },
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
  