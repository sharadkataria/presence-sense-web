import {
  GET_DOCUMENTS,
  ADD_DOCUMENTS,
  REMOVE_DOCUMENTS
} from '../common/Constants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DOCUMENTS:
      return {
        ...state,
        documents: action.payload
      };

    case ADD_DOCUMENTS:
      return {
        ...state,
        documents: [action.payload, ...state.documents]
      };

    case REMOVE_DOCUMENTS:
      return {
        ...state,
        documents: []
      };

    default: {
      return state;
    }
  }
};
