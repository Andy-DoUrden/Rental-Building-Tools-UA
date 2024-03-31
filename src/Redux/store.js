import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { API } from "./API/RTK";

const persistConfig = {
  key: "store",
  storage,
  whitelist: ["cart"],
};

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    cart: persistReducer(persistConfig, cartSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(API.middleware),
});
export const persistor = persistStore(store);
