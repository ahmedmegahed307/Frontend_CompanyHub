import axios from "axios";

type QueryParams = Record<string, string | number | boolean>;

const api = axios.create({
  //baseURL: 'https://mitsubishistaging.azurewebsites.net/api',
  baseURL: "https://localhost:44380/api",
  headers: {
    "Access-Control-Allow-Origins": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Content-Type": "application/json",
  },
});

class Api<TRequest> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    api.defaults.headers.common["Authorization"] = `Bearer ${this.getToken()}`;
  }

  getToken = (): string | null => {
    return sessionStorage.getItem("token");
  };

  removeToken = (): void => {
    sessionStorage.removeItem("token");
  };

  getAll = (isActive?: boolean, companyId?: number): Promise<ResponseData> => {
    const queryParams = new URLSearchParams();

    if (isActive !== undefined) {
      queryParams.set("isActive", isActive.toString());
    }

    if (companyId !== undefined) {
      queryParams.set("companyId", companyId.toString());
    }

    const queryString = queryParams.toString();

    return api
      .get<ResponseData>(`${this.endpoint}?${queryString}`)
      .then((res) => res.data);
  };

  get = (params?: QueryParams): Promise<ResponseData> => {
    return api
      .get<ResponseData>(this.endpoint, { params })
      .then((res) => res.data);
  };

  post = (data: TRequest): Promise<ResponseData> => {
    return api.post<ResponseData>(this.endpoint, data).then((res) => res.data);
  };

  postQuery = (): Promise<ResponseData> => {
    return api.post<ResponseData>(this.endpoint).then((res) => res.data);
  };

  update = (id: number, data: TRequest): Promise<ResponseData> => {
    return api
      .put<ResponseData>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data);
  };

  delete = (id: number): Promise<ResponseData> => {
    return api
      .delete<ResponseData>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default Api;
