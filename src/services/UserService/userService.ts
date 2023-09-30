import Api from "../api-fetch";

const UserApi = new Api<any>("/User");

// Fetch all Users
export const getAllUsers = async () => {
  const Users = await new Api<any>(
    "/User/GetUserList" + "?isActive=true"
  ).getAll();
  return Users.data.$values;
};

// Fetch all Inactive Users
export const getAllInactiveUsers = async () => {
  const Users = await new Api<any>(
    "/User/GetUserList" + "?isActive=false"
  ).getAll();
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

// Delete a User
export const deleteUser = async (UserId: number) => {
  await UserApi.delete(UserId);
};

export const createUser = async (userData: any) => {
  const Create = new Api<any>("/Auth/registeruser");
  const newUser = await Create.post(userData);
  return newUser;
};

export default {
  getAllUsers,
  getAllInactiveUsers,
  getUserByEmail,
  getUserById,
  getCurrentUser,
  updateUser,
  deleteUser,
  createUser,
};
