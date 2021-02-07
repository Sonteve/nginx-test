import axios from "axios";
import { Dispatch } from "redux";
import { ExFilterList, ExFilterListAction } from "../@types/filter";
import {
  EXFILTER_LIST_FAILURE,
  EXFILTER_LIST_SUCCESS,
} from "../reducer/filter";

export const getExFilterListThunk = () => async (
  dispatch: Dispatch<ExFilterListAction>
) => {
  try {
    const result = await axios.post<ExFilterList>(
      `https://api.adoc-solution.com/checkups/filterbyex`
    );
    dispatch({
      type: EXFILTER_LIST_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: EXFILTER_LIST_FAILURE,
      payload: err,
    });
  }
};
