import JobType from "../../models/JobType";
import Api from "../api-fetch";

const JobTypeApi = new Api<any>("/JobType");

// Fetch all JobTypes

export const getAllJobTypes = async ({ queryKey }: any) => {
  const [, { isActive, companyId }] = queryKey;
  const getAll = new Api<any>("/JobType/GetAllJobTypes");
  const JobTypes = await getAll.getAll(isActive, companyId);
  return JobTypes.data.$values;
};

// Update a JobType
export const updateJobType = async (JobTypeId: number, updatedData: any) => {
  const updatedJobType = await JobTypeApi.update(JobTypeId, updatedData);
  return updatedJobType;
};

// Delete a JobType
export const deleteJobType = async (
  JobTypeId: number
): Promise<ResponseData> => {
  const responseData = await JobTypeApi.delete(JobTypeId);
  return responseData;
};

export const createJobType = async (JobTypeData: JobType) => {
  const Create = new Api<any>("/CreateJobTypeWithSubTypes");
  const newJobType = await Create.post(JobTypeData);
  return newJobType;
};
