import { useQuery } from "@tanstack/react-query";
import clientService, { Client } from "../../../../services/ClientService/client-service";



const useClient = () =>{
    return useQuery<Client[], Error>({
        queryKey: ['clientsList'], // Update the queryKey to an array of strings
        queryFn: clientService.getAll
      });
   
}
export default useClient;