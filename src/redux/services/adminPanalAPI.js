import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AdmanPanalAPI = createApi({
  reducerPath: 'AdmanPanalAPI',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://talent-hub.onrender.com' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    getAdminAnalytices: builder.query({
      query: () => `/admin/user-count`,
    }),
    getAllUser: builder.query({
      query: () => `/admin/users/all`,
    }),
    userStatus: builder.mutation({
      query: (Body: any) => {
        return {
          url: `/admin/status`,
          method: 'PUT',
          body: Body,
        };
      },
    }),
    getAllCatagories: builder.query({
      query: () => `/categories/all`,
    }),
    getAllTransactions: builder.query({
      query: () => `/admin/transactions/all`,
    }),
    getVideoByCatagoury: builder.query({
      query: (id) => `/admin/category-videos?id=${id}`,
    }),
    gettest: builder.query({
      query: () => `/articles`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAdminAnalyticesQuery,
  useGetAllUserQuery,
  useUserStatusMutation,
  useGetAllCatagoriesQuery,
  useGetAllTransactionsQuery,
  useGetVideoByCatagouryQuery,
  useGettestQuery,
} = AdmanPanalAPI;
