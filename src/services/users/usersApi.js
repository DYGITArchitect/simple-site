import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Пока не работает, сделано только для проверки
export const usersApi = createApi({
  reducerPath: "users/api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:5000",
  }),
  tagTypes: ["users", "user"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "/users",
      providesTags: (result) => ["users"],
    }),
    getUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: (result) => ["user"],
    }),
    // login: build.mutation({
    //   query: (body) => ({
    //     url: "/login",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["login"],      // }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = usersApi;
