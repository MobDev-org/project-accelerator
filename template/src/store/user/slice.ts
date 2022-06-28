import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE, customAxiosInstance } from "helpers/axiosService";

export enum UserRole {
  Engineer = "Engineer",
  Investor = "Investor",
}

export interface UserResponse {
  token: string | null;
  refreshToken: string | null;
  user: {
    email: string;
    displayName: string;
    userRole: UserRole;
    authProvider: string;
    uid: string;
    uidDisplay: string;
  } | null;
  success: boolean;
  errors: string[] | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  `user/loginUser`,
  async (data: LoginData, thunkAPI) => {
    try {
      let response = await customAxiosInstance<UserResponse>({
        url: `/api/v1/identity/mobile-login`,
        method: "post",
        headers: { "Content-Type": "application/json-patch+json" },
        data: {
          // email: 'eng2@tabco.ba',
          // password: 'Mahir123!',
          rememberMe: false,
          moduleId: 8,
          applicationId: "f73bbfaf-544f-46e4-8d1c-ebf43270c6f2",
          ...data,
        },
      });
      // let engineerType = await engineerTypeSingle(response.user?.uid);
      AXIOS_INSTANCE.defaults.headers = {
        Authorization: `Bearer ${response.token}`,
      };

      if (response?.errors) {
        return thunkAPI.rejectWithValue(response?.errors);
      }

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type User = {
  loading: boolean;
  locale: "ba" | "en";
};

let initialState: User & UserResponse = {
  loading: false,
  locale: "ba",
  token: null,
  refreshToken: null,
  user: null,
  success: false,
  errors: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      // state = {...state, ...action.payload, loading: false};
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = false;
    });
    builder.addCase("RESET", () => initialState);
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
