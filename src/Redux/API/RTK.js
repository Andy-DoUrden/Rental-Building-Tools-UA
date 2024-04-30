import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "API",

  baseQuery: fetchBaseQuery({
    baseUrl: `https://rental-back-gpve.onrender.com/api`,
  }),

  tagTypes: ["Goods", "Orders"],

  endpoints: (builder) => ({
    getGoods: builder.query({
      query: ({ params }) => ({
        url: `/goods/catalog`,
        params,
      }),
      providesTags: ["Goods"],
    }),
    getOneGood: builder.query({
      query: (id) => ({
        url: `/goods/getOne/${id}`,
      }),
      providesTags: ["Goods"],
    }),
    addGood: builder.mutation({
      query: (body) => ({
        url: `/goods/getOne/addNew`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Goods"],
    }),
    getOrders: builder.query({
      query: ({ params }) => ({
        url: `/orders`,
        params,
      }),
      providesTags: ["Orders"],
    }),
    addOrder: builder.mutation({
      query: (body) => ({
        url: `/orders/addOrder`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `/orders/updateOrder/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useGetOneGoodQuery,
  useAddGoodMutation,
  useGetOrdersQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
} = API;
