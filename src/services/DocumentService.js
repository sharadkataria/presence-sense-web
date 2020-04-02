import ConnectionInstance from './index';

import { getAPIPath, getAPIPathByReplacement } from '../common/Helpers';
import {
  DOCUMENTS_API_PATH,
  SINGLE_DOCUMENT_API_PATH
} from '../common/Constants';

export default class AccountService {
  getDocuments = () => {
    return ConnectionInstance.get(getAPIPath(DOCUMENTS_API_PATH))
      .then(responseData => {
        if (responseData) {
          return responseData.data;
        }
      })
      .catch(errorData => {
        throw errorData;
      });
  };

  getDocumentByID = documentID => {
    return ConnectionInstance.get(
      getAPIPathByReplacement(
        SINGLE_DOCUMENT_API_PATH,
        ':documentID',
        documentID
      )
    )
      .then(responseData => {
        if (responseData) {
          return responseData.data;
        }
      })
      .catch(errorData => {
        throw errorData;
      });
  };

  addDocument = dataPayload => {
    return ConnectionInstance.post(getAPIPath(DOCUMENTS_API_PATH), dataPayload)
      .then(responseData => {
        if (responseData) {
          return responseData.data;
        }
      })
      .catch(errorData => {
        throw errorData;
      });
  };

  updateDocument = dataPayload => {
    return ConnectionInstance.put(getAPIPath(DOCUMENTS_API_PATH), dataPayload)
      .then(responseData => {
        if (responseData) {
          return responseData.data;
        }
      })
      .catch(errorData => {
        throw errorData;
      });
  };
}
