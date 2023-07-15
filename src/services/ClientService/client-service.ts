import ApiFetchData from "../api-fetch";
export interface Client {
    id: number;
    clientCode:string;
    firstName:string;
    lastName:string;
    email:string;
    vatRate:string;
    vatCurrency:string;
    vatNumber:string;
    address:string;
    phone:string;
    clientPortalAccess:string;

  }
export  const ClientMutationAPI = new ApiFetchData<Client>('/Client'); //update-delete
 export const createClient = new ApiFetchData<Client>('/Client/add');

  export default new ApiFetchData<Client>('/Client/clients');
