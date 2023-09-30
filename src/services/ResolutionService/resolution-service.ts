import ApiFetchData from "../api-fetch";
export interface Resolutions {
  id: number;
  name: string;
  isActive: boolean;
}
export const ResolutionMutationAPI = new ApiFetchData<Resolutions>(
  "/Resolution"
); //update-delete
export const createResolution = new ApiFetchData<Resolutions>("/Resolution");
export const getAllResolutions = async () => {
  const Resolution = await new ApiFetchData<any>("/Resolution").getAll();
  return Resolution.data.$values;
};
//export const  ApiFetchData<Resolutions>("/Resolution");
export default {
  getAllResolutions,
  createResolution,
  ResolutionMutationAPI,
};
