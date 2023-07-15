import { useQuery } from "@tanstack/react-query";
import jobsubtypeService, { JobSubType } from "../../../../services/JobSubTypesService/jobsubtype-service";

const useJobSubType = () =>{

  return useQuery<JobSubType[], Error>({
    queryKey: ['jobSubTypesList'], 
    queryFn: jobsubtypeService.getAll
  });
}
export default useJobSubType;

