import ApiFetchData from "../api-fetch";
export interface JobType {
    id: number;
    name:string;
    isActive:boolean;
    jobSubType:string;
    jobSubTypeId:number;
  }
export  const JobTypeMutationAPI = new ApiFetchData<JobType>('/JobType'); //update-delete
 export const createJobType = new ApiFetchData<JobType>('/JobType/add');

  export default new ApiFetchData<JobType>('/JobType/jobtypes');
