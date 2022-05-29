// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {constructionSiteIndex} from 'api/construction-site/construction-site';
import {ConstructionSite} from 'api/tabCoWebAPI.schemas';
// import api from 'services/api';

export const getActiveConstructionSites = createAsyncThunk(
    `activeConstructionSites/getActiveConstructionSites`,
    async (reqObj, thunkAPI) => {
        try {
            const data = await constructionSiteIndex(
                thunkAPI.getState().activeConstructionSites.requestObject,
            );

            return data.payload;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export type ActiveConstructionSites = {
    loading: boolean;
    data: Array<ConstructionSite>;
    requestObject: {
        index: 0;
        offset: 10;
    };
};

let initialState = {
    loading: false,
    data: [],
    requestObject: {
        // 'PaginationModel.Index': 0,
        // 'PaginationModel.Count': 10,
        'filterModels[0].filterDescriptor': 'isActive',
        'filterModels[0].filterValue': 1,
    },
} as ActiveConstructionSites;

export const activeConstructionSitesSlice = createSlice({
    name: 'activeConstructionSites',
    initialState,
    reducers: {
        resetActiveSites: state => initialState,
    },
    extraReducers: builder => {
        builder.addCase(getActiveConstructionSites.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = true;
        });
        builder.addCase(
            getActiveConstructionSites.fulfilled,
            (state, action) => {
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
                state.loading = false;
                state.data = action.payload;
                // state.requestObject['PaginationModel.Index'] =
                //     action.payload?.length;
            },
        );
        builder.addCase(
            getActiveConstructionSites.rejected,
            (state, action) => {
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
                state.loading = false;
            },
        );
        builder.addCase('RESET', () => initialState);
    },
});

export const {resetActiveSites} = activeConstructionSitesSlice.actions;

export default activeConstructionSitesSlice.reducer;
