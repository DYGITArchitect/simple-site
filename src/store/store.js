import { configureStore } from "@reduxjs/toolkit";
import authApi from "../redux/auth/authApi";
import { usersApi } from "../redux/users/usersApi";

export const createReduxStore = (initialState) => {
  return configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      login: authApi,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });
};
