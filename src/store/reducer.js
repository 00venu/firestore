import { FETCH_DATA, LOADING_PLACEHOLDER, ERROR } from "./action";
const initialData = {
  data: [],
  loading: false,
  error: false,
};

export default (state = initialData, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING_PLACEHOLDER:
      return {
        ...state,
        loading: action.lstatus,
      };
    case ERROR:
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
};
