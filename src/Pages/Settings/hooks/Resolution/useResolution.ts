import { useQuery } from "@tanstack/react-query";
import resolutionService,{Resolutions} from "../../../../services/ResolutionService/resolution-service";

const useResolution = () => {
  return useQuery<Resolutions[], Error>({
    queryKey: ['resolutionList'], // Update the queryKey to an array of strings
    queryFn: resolutionService.getAll
  });
};

export default useResolution;
