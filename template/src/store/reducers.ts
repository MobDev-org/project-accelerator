import { combineReducers } from "@reduxjs/toolkit";
import blop from "./blop/slice";

import pest from "./pest/slice";

import user from "./user/slice";

const rootReducer = combineReducers({
  user,
blop,

  pest,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
