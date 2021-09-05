import { combineReducers } from "redux";
import { updatesReducer } from "./updatesReducer";

export const rootReducer = combineReducers({
  updates: updatesReducer,
});
