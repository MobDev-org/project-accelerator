import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from 'helpers/axiosService';


export const getBlop = createAsyncThunk(`blop/getBlop`, async (reqObj, thunkAPI) => {
    try {
        const data = await AXIOS_INSTANCE.get("/blop");

        // return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export type Blop = {
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
} as Blop;

export const blopSlice = createSlice({
    name:  "blop",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder.addCase(getBlop.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(getBlop.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getBlop.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    },
});

 export const {reset} = blopSlice.actions;

 export default blopSlice.reducer;

