import axios, { AxiosResponse } from 'axios';
import { BACK_URL } from 'src/config';
import { AuthData, AuthToken } from 'src/utils/types/authData';

export const login = async (body: AuthData): Promise<AuthToken> => {
  const response = await axios.post<AuthToken>(
    `${BACK_URL}/auth/api/token/`,
    body,
  );

  return response.data;
};
export const logout = async (): Promise<AxiosResponse> => {
  const response = await axios.post<AxiosResponse>(`${BACK_URL}/logout/`);

  return response.data;
};
