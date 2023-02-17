import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import MainPageReducer from "../reducers/MainPageReducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
};

const mainReducer = combineReducers({
  search: MainPageReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);