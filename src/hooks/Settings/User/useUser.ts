import { useQuery } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../../models";

const useUser = () =>{

    return  useQuery<UsersObject[],Error>({
        queryKey: ['userList'],
        queryFn: () => {
          return DataStore.query(UsersObject);
        },
      });
}
export default useUser;