import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AdmanPanalAPI = createApi({
  reducerPath: 'AdmanPanalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://talent-hub.onrender.com' }),
  endpoints: (builder) => ({
    getAdminAnalytices: builder.query({
      query: () => `/admin/user-count`,
    }),
    getAllUser: builder.query({
      query: () => `/admin/users/all`,
    }),

    // transformResponse: (response: { result: any }) => response.result,
    //
    userStatus: builder.mutation({
      query: (Body: any) => {
        return {
          url: `/admin/status`,
          method: 'PUT',
          body: Body,
          // headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    getAllCatagories: builder.query({
      query: () => `/categories/all`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAdminAnalyticesQuery, useGetAllUserQuery, useUserStatusMutation, useGetAllCatagoriesQuery } =
  AdmanPanalAPI;
