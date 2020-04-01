import {
  GET_DOCUMENTS,
  ADD_DOCUMENTS,
  REMOVE_DOCUMENTS,
  DOCUMENT_VIEWERS,
  REMOVE_DOCUMENT_VIEWERS
} from '../common/Constants';
import get from 'lodash/get';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DOCUMENTS:
      return {
        ...state,
        documents: get(action, 'payload', [])
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

    case DOCUMENT_VIEWERS:
      return {
        ...state,
        viewers: get(action, 'payload', [])
      };

    case REMOVE_DOCUMENT_VIEWERS:
      return {
        ...state,
        viewers: []
      };

    default: {
      return state;
    }
  }
};
