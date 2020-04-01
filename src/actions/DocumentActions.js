import {
  GET_DOCUMENTS,
  ADD_DOCUMENTS,
  DOCUMENT_VIEWERS,
  REMOVE_DOCUMENT_VIEWERS
} from '../common/Constants';

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

export const updateViewers = dataPayload => dispatch => {
  dispatch({
    type: DOCUMENT_VIEWERS,
    payload: dataPayload
  });
};

export const removeViewers = () => dispatch => {
  dispatch({
    type: REMOVE_DOCUMENT_VIEWERS,
    payload: {}
  });
};
