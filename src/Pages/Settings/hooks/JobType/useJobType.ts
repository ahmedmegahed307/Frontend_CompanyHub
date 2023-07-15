import { useQuery } from "@tanstack/react-query";
import jobtypeService, { JobType } from "../../../../services/JobTypeService/jobtype-service";

const useJobType = () =>{

  return useQuery<JobType[], Error>({
    queryKey: ['jobTypesList'], 
    queryFn: jobtypeService.getAll
  });
}
export default useJobType;

