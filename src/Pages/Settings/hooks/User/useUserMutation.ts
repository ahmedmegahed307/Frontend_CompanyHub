import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { User, UserMutationAPI } from "../../../../services/UserService/user-service";

const useUserMutation = (onUpdateOrDelete: () => void, isUpdate: boolean) => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, User | number>(
    async (user: User | number) => {
    if (isUpdate) {
      const id = (user as User).id;
      return UserMutationAPI.update(id, user);
    } else {
      const id = user as number;
      return UserMutationAPI.delete(id);
    }
    },
    {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["usersList"],
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
      console.log("errorUserMutation", error);
    },
  }
);
};

export default useUserMutation;
