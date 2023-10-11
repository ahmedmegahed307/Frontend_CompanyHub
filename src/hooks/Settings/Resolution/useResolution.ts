import { useQuery } from "@tanstack/react-query";
import Resolution from "../../../models/Resolution";
import resolutionService from "../../../services/ResolutionService/resolutionService";

const useResolution = () => {
  return useQuery<Resolution[], Error>({
    queryKey: ["resolutionList"],
    queryFn: resolutionService.getAllResolutions,
  });
};

export default useResolution;
