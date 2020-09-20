import { FETCH_DATA, LOADING_PLACEHOLDER } from "./action";
const initialData = {
  data: [],
  loading: false,
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
    default:
      return state;
  }
};
