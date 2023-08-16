import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AdminPanal = createApi({
  reducerPath: 'AdminPanal',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdk-crud-test.onrender.com' }),

  tagTypes: ['Users'],

  endpoints: (builder) => ({
    getalluser: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),

    adduser: builder.mutation({
      query: (adduser) => ({
        url: '/users',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: adduser,
      }),
      invalidatesTags: ['Users'],
    }),
    updateuser: builder.mutation({
      query: (post) => ({
        url: `/users/${post.id}`,
        method: 'PUT',
        // Include the entire post object as the body of the request
        body: post,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
        // Include the entire post object as the body of the request
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});
export const { useGetalluserQuery, useAdduserMutation, useUpdateuserMutation, useDeleteUserMutation } = AdminPanal;
