import { useQuery } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import { UsersObject } from "../../../models";

const useClient = () =>{

    return  useQuery<UsersObject[],Error>({
        queryKey: ['clientList'],
        queryFn: () => {
          return DataStore.query(UsersObject, (c) =>
          c.type.eq("client"))
        },
      });
}
export default useClient;