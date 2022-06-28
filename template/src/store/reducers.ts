import { combineReducers } from "@reduxjs/toolkit";
import test from "./test/slice";

import user from "./user/slice";

const rootReducer = combineReducers({
  user,
  test,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
