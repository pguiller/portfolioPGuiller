import { DecodedToken } from 'src/utils/types/decodedToken';
import { AlertState, Error } from 'src/utils/types/redux';
import { ReduxStatus } from 'src/utils/types/reduxStatusValues';

export interface AuthState {
  alert: AlertState;
  user: DecodedToken | null;
  error: Error;
  status: ReduxStatus;
  token: string | null;
}
