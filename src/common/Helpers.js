import { API_BASEPATH } from './Constants';

export const getAPIPath = ROUTER_PATH => {
  return `${API_BASEPATH}/${ROUTER_PATH}`;
};

export const getAPIPathByReplacement = (
  ROUTER_PATH,
  REPLACEMENT_KEY,
  REPLACEMENT_VALUE
) => {
  return getAPIPath(ROUTER_PATH).replace(REPLACEMENT_KEY, REPLACEMENT_VALUE);
};
