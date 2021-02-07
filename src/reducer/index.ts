import { combineReducers } from "redux";
import filter from "./filter";
const rootReducer = combineReducers({
  filter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
