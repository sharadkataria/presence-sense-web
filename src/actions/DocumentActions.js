import {
  GET_DOCUMENTS,
  ADD_DOCUMENTS,
  DOCUMENT_VIEWERS,
  REMOVE_DOCUMENT_VIEWERS,
  ACTIVE_DOCUMENT,
  REMOVE_ACTIVE_DOCUMENT
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

export const updateActiveDocument = dataPayload => dispatch => {
  dispatch({
    type: ACTIVE_DOCUMENT,
    payload: dataPayload
  });
};

export const removeActiveDocument = () => dispatch => {
  dispatch({
    type: REMOVE_ACTIVE_DOCUMENT,
    payload: {}
  });
};
