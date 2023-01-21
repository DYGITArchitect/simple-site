import { configureStore } from "@reduxjs/toolkit";
import authApi from "../services/auth/authApi";
import { usersApi } from "../services/users/usersApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    login: authApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
