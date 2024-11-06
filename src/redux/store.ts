import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices/userSlice";
import fileSlice from "./slices/filesSlice";
import menuSlice from "./slices/menu";
import  activeFileSlice  from "./slices/activeFile";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  blacklist: ["load", "data"],
};

const rootReducer = combineReducers({
  user: userSlice,
  files: fileSlice,
  menu: menuSlice,
  activeFile: activeFileSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
