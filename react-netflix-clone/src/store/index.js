/* eslint-disable no-unused-vars */
import {
  combineReducers,
  configureStore,
  middleware
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";


import musicReducer from "../reducers/MainPageReducer";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  
};

const bigReducer = combineReducers({
  music: musicReducer,

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