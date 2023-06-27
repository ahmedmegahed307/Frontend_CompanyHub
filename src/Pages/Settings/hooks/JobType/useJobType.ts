import { useQuery } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import { JobTypesList } from "../../../../models";

const useJobType= () =>{

    return  useQuery<JobTypesList[],Error>({
        queryKey: ['jobTypeList'],
        queryFn: () => {
          return DataStore.query(JobTypesList, (c) => c.isActive.eq(true));
        },
      });
}
export default useJobType;