import { LOGIN, LOGOUT } from '../common/Constants';

export const loginAction = dataPayload => dispatch => {
  dispatch({
    type: LOGIN,
    payload: dataPayload
  });
};

export const logoutAction = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: {}
  });
};
