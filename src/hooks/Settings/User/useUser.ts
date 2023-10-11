import { useQuery } from "@tanstack/react-query";
import User from "../../../models/User";
import userService from "../../../services/UserService/userService";

const useUser = (isActive: boolean) => {
  return useQuery<User[], Error>({
    queryKey: ["usersList", isActive],
    queryFn: () => userService.getAllUsers(isActive),
  });
};
export default useUser;
