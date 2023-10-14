import Api from "../api-fetch";

const UserApi = new Api<any>("/User");

// Fetch all Users
export const getAllUsers = async ({ queryKey }: any) => {
  const [, { isActive, companyId }] = queryKey;

  const Users = await UserApi.getAll(isActive, companyId);
  return Users.data.$values;
};

// Fetch a specific User by ID
export const getUserById = async (UserId: number) => {
  const GetByIdApi = await new Api<any>(
    "/User/GetUserById/" + "?id=" + UserId
  ).getAll();
  return GetByIdApi.data;
};

export const getCurrentUser = async () => {
  const GetByIdApi = await new Api<any>("/User/GetCurrentUser/").getAll();
  return GetByIdApi.data;
};

// Fetch a specific User by ID
export const getUserByEmail = async (email: string) => {
  const GetByEmailApi = new Api<any>("/User/GetUserByEmail");
  const User = await GetByEmailApi.get({ email: email });
  return User;
};

// Update a User
export const updateUser = async (UserId: number, updatedData: any) => {
  const updatedUser = await UserApi.update(UserId, updatedData);
  return updatedUser;
};
export const restoreUser = async (UserId: number) => {
  const restoreUser = new Api<any>("/User/restore");
  const restoredUser = await restoreUser.restore(UserId);
  return restoredUser;
};

// Delete a User

export const deleteUser = async (
  ResolutionId: number
): Promise<ResponseData> => {
  const responseData = await UserApi.delete(ResolutionId);
  return responseData;
};

export const createUser = async (userData: any) => {
  const newUser = await UserApi.post(userData);
  return newUser;
};
