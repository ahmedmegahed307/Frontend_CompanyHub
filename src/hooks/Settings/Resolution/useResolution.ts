import { useQuery } from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import { Resolutions } from "../../../models";

const useResolution = () =>{

    return  useQuery<Resolutions[],Error>({
        queryKey: ['resolutionList'],
        queryFn: () => {
          return DataStore.query(Resolutions, (c) => c.isActive.eq(true));
        },
      });
}
export default useResolution;