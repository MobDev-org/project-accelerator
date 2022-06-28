import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from 'helpers/axiosService';


export const getTest = createAsyncThunk(`test/getTest`, async (reqObj, thunkAPI) => {
    try {
        const data = await AXIOS_INSTANCE.get("/test");

        // return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export type Test = {
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
} as Test;

export const testSlice = createSlice({
    name:  "test",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder.addCase(getTest.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(getTest.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getTest.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    },
});

 export const {reset} = testSlice.actions;

 export default testSlice.reducer;

