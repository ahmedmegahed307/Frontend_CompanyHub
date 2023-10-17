import { Job } from "../../models/Job";
import Api from "../api-fetch";

const JobApi = new Api<any>("/Job");

// Fetch all Jobs

export const getAllJobs = async ({ queryKey }: any) => {
  const [, { isActive, companyId }] = queryKey;
  const getAll = new Api<any>("/Job/GetAllJobs");
  const Jobs = await getAll.getAll(isActive, companyId);
  console.log(Jobs);
  return Jobs.data.$values;
};

// Update a Job
export const updateJob = async (JobId: number, updatedData: any) => {
  const updatedJob = await JobApi.update(JobId, updatedData);
  return updatedJob;
};

// Delete a Job
export const deleteJob = async (JobId: number): Promise<ResponseData> => {
  const responseData = await JobApi.delete(JobId);
  return responseData;
};

export const createJob = async (JobData: Job) => {
  const newJob = await JobApi.post(JobData);
  return newJob;
};
