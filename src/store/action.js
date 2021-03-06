export const FETCH_DATA = "FETCH_DATA";
export const LOADING_PLACEHOLDER = "LOADING_PLACEHOLDER";
export const ERROR = "ERROR";

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const loadingPlaceHolder = (status) => {
  return {
    type: LOADING_PLACEHOLDER,
    lstatus: status,
  };
};

export const errorAction = (errStatus) => {
  return {
    type: ERROR,
    err: errStatus,
  };
};
