// @ts-nocheck
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {constructionSiteIndex} from 'api/construction-site/construction-site';
// import api from 'services/api';

export const getInactiveConstructionSitesInDNP = createAsyncThunk(
    `inactiveConstructionSitesInDNP/getInactiveConstructionSitesInDNP`,
    async (reqObj, thunkAPI) => {
        try {
            const data = await constructionSiteIndex(
                thunkAPI.getState().inactiveConstructionSitesInDNP
                    .requestObject,
            );

            return data.payload;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export type InactiveConstructionSitesInDNP = {
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
        'filterModels[1].filterValue': 1,
    },
} as InactiveConstructionSitesInDNP;

export const inactiveConstructionSitesInDNPSlice = createSlice({
    name: 'inactiveConstructionSitesInDNP',
    initialState,
    reducers: {
        resetInactiveSitesInDNP: state => initialState,
    },
    extraReducers: builder => {
        builder.addCase(
            getInactiveConstructionSitesInDNP.pending,
            (state, action) => {
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
                state.loading = true;
            },
        );
        builder.addCase(
            getInactiveConstructionSitesInDNP.fulfilled,
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
            getInactiveConstructionSitesInDNP.rejected,
            (state, action) => {
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
                state.loading = false;
            },
        );
        builder.addCase('RESET', () => initialState);
    },
});

export const {resetInactiveSitesInDNP} =
    inactiveConstructionSitesInDNPSlice.actions;

export default inactiveConstructionSitesInDNPSlice.reducer;
