import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import DocumentReducer from './DocumentReducer';

export default combineReducers({
  userData: UserReducer,
  documentData: DocumentReducer
});
