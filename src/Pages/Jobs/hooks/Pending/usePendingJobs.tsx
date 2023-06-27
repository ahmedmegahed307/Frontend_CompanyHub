import { useQuery } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import { Jobs } from "../../../../models";

const usePendingJobs = () => {
  return useQuery<Jobs[], Error>({
    queryKey: ["jobTypeList"],
    queryFn: () => {
      return DataStore.query(Jobs);
    },
  });
};
export default usePendingJobs;
