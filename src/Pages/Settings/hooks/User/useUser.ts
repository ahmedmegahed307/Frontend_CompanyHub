import { useQuery } from "@tanstack/react-query";
import { User } from "../../../../services/UserService/user-service";
import userService from "../../../../services/UserService/userService";

const useUser = () => {
  return useQuery<User[], Error>({
    queryKey: ["usersList"],
    queryFn: userService.getAllUsers,
  });
};
export default useUser;
