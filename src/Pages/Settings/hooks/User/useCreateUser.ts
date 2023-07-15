import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { User,createUser } from "../../../../services/UserService/user-service";

const useCreateUser = (onCreate: () => void) => {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation<User, Error, User>(createUser.post, {
    onSuccess: (savedUser) => {
      queryClient.invalidateQueries(["usersList"]);

      Swal.fire({
        title: "Congratulations",
        text: "Users have been saved successfully",
        icon: "success",
      });

      onCreate();
      return savedUser;
    },
    onError: (error) => {
      console.log("error", error);
      throw new Error("Failed to create User");
    },
  });

  const createUserFn = async (newUser: User) => {
    await createUserMutation.mutateAsync(newUser);
  };

  return createUserFn;
};

export default useCreateUser;
