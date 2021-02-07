import { AxiosError } from "axios";
import { FilterState, FilterActions } from "../@types/filter";
export const EXFILTER_LIST_REQUEST = "filter/EXFILTER_LIST_REQUEST" as const;
export const EXFILTER_LIST_SUCCESS = "filter/EXFILTER_LIST_SUCCESS" as const;
export const EXFILTER_LIST_FAILURE = "filter/EXFILTER_LIST_FAILURE" as const;
export const CHANGE_EX_FILTER = "filter/CHANGE_EX_FILTER";

export const changeExFilter = (filter: string[]) => ({
  type: CHANGE_EX_FILTER,
  payload: filter,
});
const initialstate: FilterState = {
  exFilterList: null,
  exFilterListLoading: false,
  exFilterListError: null,
  exFilter: [],
};

function filter(state = initialstate, action: FilterActions) {
  switch (action.type) {
    case EXFILTER_LIST_REQUEST:
      return {
        ...state,
        exFilterListLoading: true,
        exFilterList: null,
        exFilterListError: null,
      };
    case EXFILTER_LIST_SUCCESS:
      return {
        ...state,
        exFilterListLoading: false,
        exFilterList: action.payload,
        exFilterListError: null,
      };
    case EXFILTER_LIST_FAILURE:
      return {
        ...state,
        exFilterListLoading: false,
        exFilterList: null,
        exFilterListError: action.payload,
      };
    case CHANGE_EX_FILTER:
      return {
        ...state,
        exFilter: action.payload,
      };
    default:
      return state;
  }
}

export default filter;
