import { useQuery } from "@tanstack/react-query";
import resolutionService from "../../../../services/ResolutionService/resolution-service";
import Resolution from "../../../../models/Resolution";

const useResolution = () => {
  return useQuery<Resolution[], Error>({
    queryKey: ["resolutionList"],
    queryFn: resolutionService.getAllResolutions,
  });
};

export default useResolution;
