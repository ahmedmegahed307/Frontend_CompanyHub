import ApiFetchData from "../api-fetch";
export interface JobSubType {
    id: number;
    name:string;
    isActive:boolean;
  }
export  const JobSubTypeMutationAPI = new ApiFetchData<JobSubType>('/JobSubType'); //update-delete
 export const createJobSubType = new ApiFetchData<JobSubType>('/JobSubType/add');

  export default new ApiFetchData<JobSubType>('/JobSubType/jobsubtypes');
