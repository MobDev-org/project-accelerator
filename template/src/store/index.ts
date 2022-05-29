import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';
import {useDispatch} from 'react-redux';

const persistConfig = {
    timeout: null,
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    blacklist: [],
    // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware = [];
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleware.push(createDebugger());
}

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(middleware),
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
