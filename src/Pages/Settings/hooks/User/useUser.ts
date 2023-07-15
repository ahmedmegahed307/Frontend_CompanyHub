import { useQuery } from "@tanstack/react-query";
import userService, { User } from "../../../../services/UserService/user-service";

const useUser = () =>{

  return useQuery<User[], Error>({
    queryKey: ['usersList'], 
    queryFn: userService.getAll
  });
}
export default useUser;