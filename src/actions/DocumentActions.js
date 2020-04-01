import { GET_DOCUMENTS, ADD_DOCUMENTS } from '../common/Constants';

export const getDocuments = dataPayload => dispatch => {
  dispatch({
    type: GET_DOCUMENTS,
    payload: dataPayload
  });
};

export const addDocument = dataPayload => dispatch => {
  dispatch({
    type: ADD_DOCUMENTS,
    payload: dataPayload
  });
};
