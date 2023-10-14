import Site from "../../models/Site";
import Api from "../api-fetch";

const SiteApi = new Api<any>("/ClientSite");

// Fetch all Sites

export const getAllSites = async ({ queryKey }: any) => {
  const [, { isActive, companyId }] = queryKey;
  const Sites = await SiteApi.getAll(isActive, companyId);
  return Sites.data.$values;
};

// Update a Site
export const updateSite = async (SiteId: number, updatedData: any) => {
  const updatedSite = await SiteApi.update(SiteId, updatedData);
  return updatedSite;
};

// Delete a Site
export const deleteSite = async (SiteId: number): Promise<ResponseData> => {
  const responseData = await SiteApi.delete(SiteId);
  return responseData;
};

export const createSite = async (SiteData: Site) => {
  const newSite = await SiteApi.post(SiteData);
  return newSite;
};
