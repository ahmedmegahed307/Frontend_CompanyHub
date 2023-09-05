import ApiFetchData from "../api-fetch";
export interface Resolutions {
    id: number;
    name: string; 

  }
export  const ResolutionMutationAPI = new ApiFetchData<Resolutions>('/Resolution'); //update-delete
 export const createResolution = new ApiFetchData<Resolutions>('/Resolution/add');

  export default new ApiFetchData<Resolutions>('/Resolution');
  