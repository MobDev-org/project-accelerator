import { combineReducers } from "@reduxjs/toolkit";

import user from "./user/slice";

const rootReducer = combineReducers({
  user,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
