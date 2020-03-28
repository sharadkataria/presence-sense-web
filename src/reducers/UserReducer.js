import { HELLO } from '../common/Constants';

export default (state = {}, action) => {
  switch (action.type) {
    case HELLO:
      return {
        ...state,
        userDetails: action.payload
      };

    default: {
      return state;
    }
  }
};
