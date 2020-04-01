import axios from 'axios';
import { API_BASEPATH } from '../common/Constants';

const API = axios.create({
  baseURL: API_BASEPATH,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  withCredentials: false
});

export default API;
