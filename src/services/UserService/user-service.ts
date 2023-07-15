import ApiFetchData from "../api-fetch";
export interface User {
    id: number;
    firstName:string;
    lastName:string;
    email:string;
    address:string;
    phone:string;
    roleName:string;
    roleId:number;


  }
export  const UserMutationAPI = new ApiFetchData<User>('/User'); //update-delete
 export const createUser = new ApiFetchData<User>('/User/add');

  export default new ApiFetchData<User>('/User/users');
