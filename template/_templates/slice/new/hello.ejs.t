---
to: src/store/<%= name %>/slice.ts

---
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from 'helpers/axiosService';

export const get<%= name %> = createAsyncThunk(`<%= name %>/get-<%= name %>`, async (reqObj, thunkAPI) => {
    try {
        const data = await AXIOS_INSTANCE.get("/<%= name %>");
        // console.log('data',reqObj, data);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

 let initialState = {
    loading: false,
    data: [],
    requestObject: {
        index: 0,
        offset: 10,
    },
 };

 export const <%= name %>Slice = createSlice({
     name:  "<%= name %>",
     initialState,
     reducers: {
         reset<%= name %>: () => initialState,
     },
    extraReducers: builder => {
        builder.addCase(get<%= name %>.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(get<%= name %>.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            // state = {...state, ...action.payload, loading: false};
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(get<%= name %>.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    }
});

 export const {reset<%= name %>} = <%= name %>Slice.actions;

 export default <%= name %>Slice.reducer;

