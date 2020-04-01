import { LOGIN, LOGOUT, REMOVE_DOCUMENTS } from '../common/Constants';

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

  dispatch({
    type: REMOVE_DOCUMENTS,
    payload: {}
  });
};
