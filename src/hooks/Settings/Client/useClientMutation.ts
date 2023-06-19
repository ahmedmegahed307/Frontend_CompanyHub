import { useQueryClient, useMutation } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { UsersObject } from "../../../models";

const useClientMutation = (onUpdateOrDelete: () => void, isUpdate: boolean) => {
    const queryClient = useQueryClient();
  
    return useMutation<UsersObject, Error, UsersObject | string>(
      async (client: UsersObject | string) => {
        if (isUpdate) {
          const original = await DataStore.query(
            UsersObject,
            (client as UsersObject).id || ""
          );
  
          if (original) {
            const updatedClient = client as UsersObject;
            return DataStore.save(
              UsersObject.copyOf(original, (updated) => {
                Object.assign(updated, updatedClient);
              })
            );
          }
  
          throw new Error("Client not found");
        } else {
          const id = client as string;
          const original = await DataStore.query(UsersObject, id);
          console.log("original", original);
          if (original) {
            return DataStore.delete(original);
          }
  
          throw new Error("Client not found");
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["clientList"],
          });
          Swal.fire({
            title: "Success",
            text: isUpdate
              ? "Client has been updated successfully"
              : "Client has been deleted successfully",
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
  
  export default useClientMutation;
  