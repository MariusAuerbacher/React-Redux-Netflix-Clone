import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { persistReducer, persistStore} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import MainPageReducer from '../reducers/MainPageReducer';


const persistConfig = {
  key: "root",
  storage: storage,
  
};

const bigReducer = combineReducers({
  music: MainPageReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);