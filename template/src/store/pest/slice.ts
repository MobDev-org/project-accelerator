import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from 'helpers/axiosService';


export const getPest = createAsyncThunk(`pest/getPest`, async (reqObj, thunkAPI) => {
    try {
        const data = await AXIOS_INSTANCE.get("/pest");

        // return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export type Pest = {
    loading: boolean;
    data: Array<any>;
    requestObject: {
        index: 0;
        offset: 10;
    };
};

let initialState = {
    loading: false,
    data: [],
    requestObject: {
        index: 0,
        offset: 10,
    },
} as Pest;

export const pestSlice = createSlice({
    name:  "pest",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder.addCase(getPest.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(getPest.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getPest.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    },
});

 export const {reset} = pestSlice.actions;

 export default pestSlice.reducer;

