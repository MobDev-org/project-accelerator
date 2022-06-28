---
to: src/store/<%= name %>/slice.ts
---
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from 'helpers/axiosService';


export const get<%= h.capitalize(name) %> = createAsyncThunk(`<%= name %>/get<%= h.capitalize(name) %>`, async (reqObj, thunkAPI) => {
    try {
        const data = await AXIOS_INSTANCE.get("/<%= name %>");

        // return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export type <%= h.capitalize(name) %> = {
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
} as <%= h.capitalize(name) %>;

export const <%= name %>Slice = createSlice({
    name:  "<%= name %>",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder.addCase(get<%= h.capitalize(name) %>.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(get<%= h.capitalize(name) %>.fulfilled, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(get<%= h.capitalize(name) %>.rejected, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = false;
        });
        builder.addCase('RESET', () => initialState);
    },
});

 export const {reset} = <%= name %>Slice.actions;

 export default <%= name %>Slice.reducer;

