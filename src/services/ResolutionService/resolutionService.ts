import Resolution from "../../models/Resolution";
import Api from "../api-fetch";

const ResolutionApi = new Api<any>("/Resolution");

// Fetch all Resolutions

export const getAllResolutions = async ({ queryKey }: any) => {
  const [, { isActive, companyId }] = queryKey;
  const Resolutions = await ResolutionApi.getAll(isActive, companyId);
  return Resolutions.data.$values;
};

// Update a Resolution
export const updateResolution = async (
  ResolutionId: number,
  updatedData: any
) => {
  const updatedResolution = await ResolutionApi.update(
    ResolutionId,
    updatedData
  );
  return updatedResolution;
};

// Delete a Resolution
export const deleteResolution = async (
  ResolutionId: number
): Promise<ResponseData> => {
  const responseData = await ResolutionApi.delete(ResolutionId);
  return responseData;
};

export const createResolution = async (ResolutionData: Resolution) => {
  const Create = new Api<any>("/Resolution");
  const newResolution = await Create.post(ResolutionData);
  return newResolution;
};
