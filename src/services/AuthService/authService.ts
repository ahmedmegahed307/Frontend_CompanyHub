import Api from "../api-fetch";

interface LoginPayload {
  email: string;
  password: string;
}

interface ResetPasswordPayload {
  Email: string;
  Password: string;
  ResetPasswordCode: string;
}

class AuthenticationService {
  private authApi: Api<LoginPayload>;

  constructor() {
    this.authApi = new Api<LoginPayload>("/Auth/login");
  }

  login = async (email: string, password: string): Promise<string> => {
    const response = await this.authApi.post({ email, password });
    if (response) {
      return response.data;
    }
    throw new Error("Token not received");
  };

  forgotPassword = async (email: string): Promise<any> => {
    var forgetPasswordApi = new Api("/Auth/forgotpassword" + "?email=" + email);
    const response = await forgetPasswordApi.postQuery();
    return response.code;
  };

  confirmCode = async (email: string, token: string): Promise<any> => {
    var confirmResetPasswordApi = new Api(
      "/Auth/confirmcode" + "?email=" + email + "&guardCode=" + token.toString()
    );
    const response = await confirmResetPasswordApi.postQuery();
    return response.code;
  };

  resetPassword = async (
    email: string,
    password: string,
    token: string
  ): Promise<any> => {
    var resetPasswordApi = new Api<ResetPasswordPayload>("/Auth/resetpassword");
    const response = await resetPasswordApi.post({
      Email: email,
      Password: password,
      ResetPasswordCode: token,
    });
    return response.code;
  };
}

export default new AuthenticationService();
