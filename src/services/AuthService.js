import ConnectionInstance from './index';

import { getAPIPath } from '../common/Helpers';
import { SIGNUP_API_PATH, LOGIN_API_PATH } from '../common/Constants';

export default class AccountService {
  login = dataPayload => {
    return ConnectionInstance.post(getAPIPath(LOGIN_API_PATH), dataPayload)
      .then(responseData => {
        if (responseData) {
          ConnectionInstance.defaults.headers.common['Authorization'] =
            responseData.data.access_token;

          return responseData.data;
        }
      })
      .catch(errorData => {
        throw errorData;
      });
  };

  signup = dataPayload => {
    return ConnectionInstance.post(getAPIPath(SIGNUP_API_PATH), dataPayload)
      .then(responseData => {
        if (responseData) {
          ConnectionInstance.defaults.headers.common['Authorization'] =
            responseData.data.access_token;
        }

        return responseData.data;
      })
      .catch(errorData => {
        throw errorData;
      });
  };
}
