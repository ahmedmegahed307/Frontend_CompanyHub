import ApiFetchData from "../api-fetch";
export interface Resolutions {
    id: number;
    name: string; 
    isActive: boolean;

  }
export  const ResolutionMutationAPI = new ApiFetchData<Resolutions>('/Resolution'); //update-delete
 export const createResolution = new ApiFetchData<Resolutions>('/Resolution');

  export default new ApiFetchData<Resolutions>('/Resolution');
  