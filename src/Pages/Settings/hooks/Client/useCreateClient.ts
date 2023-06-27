import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { UsersObject } from "../../../../models";

const useCreateClient = (onCreate:()=>void) =>{
    const queryClient = useQueryClient();
    return useMutation<UsersObject,Error,UsersObject>(
        (client: UsersObject) =>
          DataStore.save(
            new UsersObject({
                
        name: client.name,
        siteType: client.siteType,
        type: "client",
        financialContactEmail: client.financialContactEmail,
        financialContactName: client.financialContactName,
        currencyCode: client.currencyCode,

        vatRate: client.vatValue,
        vatNumber: client.vatNumber,
        vatValue: client.vatValue,
                 })
          ),
        {
          //savedClient -> object from databse , newClient ->object we created
          onSuccess: (savedClient, newClient) => { 
            console.log(savedClient);
            queryClient.invalidateQueries({
              queryKey: ["clientList"],
            });
            Swal.fire({
              title: "Congratulations",
              text: "Client have been saved successfully",
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
export default useCreateClient;