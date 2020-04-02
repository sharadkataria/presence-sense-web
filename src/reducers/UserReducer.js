import get from 'lodash/get';
import { LOGIN, LOGOUT } from '../common/Constants';
import ConnectionInstance from '../services/';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userDetails: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        userDetails: null
      };

    case 'persist/REHYDRATE': {
      if (get(action, 'payload.userData.userDetails', null)) {
        ConnectionInstance.defaults.headers.common['Authorization'] = get(
          action,
          'payload.userData.userDetails.access_token',
          null
        );
      }
      return state;
    }

    default: {
      return state;
    }
  }
};
