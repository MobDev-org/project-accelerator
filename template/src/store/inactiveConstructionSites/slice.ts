// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {constructionSiteIndex} from 'api/construction-site/construction-site';
// import api from 'services/api';

export const getInactiveConstructionSites = createAsyncThunk(
    `inactiveConstructionSites/getInactiveConstructionSites`,
    async (reqObj, thunkAPI) => {
        try {
            const data = await constructionSiteIndex(
                thunkAPI.getState().inactiveConstructionSites.requestObject,
            );

            return data.payload;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export type InactiveConstructionSites = {
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
        // 'PaginationModel.Index': 0,
        // 'PaginationModel.Count': 10,
        'filterModels[0].filterDescriptor': 'isActive',
        'filterModels[0].filterValue': 0,
        'filterModels[1].filterDescriptor': 'isInDnpPhase',
        'filterModels[1].filterValue': 0,
    },
} as InactiveConstructionSites;

export const inactiveConstructionSitesSlice = createSlice({
    name: 'inactiveConstructionSites',
    initialState,
    reducers: {
        resetInactiveSites: state => initialState,
    },
    extraReducers: builder => {
        builder.addCase(
            getInactiveConstructionSites.pending,
            (state, action) => {
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
                state.loading = true;
            },
        );
        builder.addCase(
            getInactiveConstructionSites.fulfilled,
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
            getInactiveConstructionSites.rejected,
            (state, action) => {
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
                state.loading = false;
            },
        );
        builder.addCase('RESET', () => initialState);
    },
});

export const {resetInactiveSites} = inactiveConstructionSitesSlice.actions;

export default inactiveConstructionSitesSlice.reducer;
