import {combineReducers} from '@reduxjs/toolkit';

import inactiveConstructionSitesInDNP from './inactiveConstructionSitesInDNP/slice';
import inactiveConstructionSites from './inactiveConstructionSites/slice';
import activeConstructionSites from './activeConstructionSites/slice';
import user from './user/slice';

const rootReducer = combineReducers({
    inactiveConstructionSitesInDNP,
    inactiveConstructionSites,
    activeConstructionSites,
    user,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
