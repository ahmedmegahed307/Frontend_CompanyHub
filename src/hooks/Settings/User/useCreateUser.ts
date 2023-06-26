import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import Swal from "sweetalert2";
import { Address, UsersObject } from "../../../models";
import { CreateUserValidation } from "../../../components/Settings/Users/CreateUser";

const useCreateUserMutation = (onCreate: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<UsersObject, Error, CreateUserValidation>((data: CreateUserValidation) =>
    DataStore.save(
      new UsersObject({
        name: data.name,
        email: data.email,
        type: data.role,
        adresses: [
          new Address({
            contactName: data.contactName,
            tel: data.phoneNumber,
          }),
        ],
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
          text: "User has been saved successfully",
          icon: "success",
        });
        onCreate();
      },
      onError: (error: any) => {
        console.log("Error", error);
      },
    }
  );
};

export default useCreateUserMutation;
