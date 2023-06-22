import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { Address, UsersObject } from "../../../models";

const useCreateUserMutation = (onCreate: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<UsersObject, Error, UsersObject>((user: UsersObject) =>
  
  
    DataStore.save(
      new UsersObject({
        name: user.name,
        email: user.email,
        type: user.type,
        adresses: user.adresses
          ? [
              new Address({
                contactName: user.adresses[0]?.contactName,
                tel: user.adresses[0]?.tel,
              }),
            ]
          : [],
      })
    ),
    {
      onSuccess: (savedUser, newUser) => {
        console.log(savedUser);
        queryClient.invalidateQueries({
          queryKey: ["userList"],
        });
        Swal.fire({
          title: "Congratulations",
          text: "user has been saved successfully",
          icon: "success",
        });
        onCreate();
      },
      onError: (error: any) => {
        console.log("error", error);
      },
    }
  );
};

export default useCreateUserMutation;
