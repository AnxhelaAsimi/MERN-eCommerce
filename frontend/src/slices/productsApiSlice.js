import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
             url: PRODUCTS_URL
            }),
            providesTags: ['Product'],
            keepUnusedDataFor: 5, // 5 seconds
        }),
        getProductDetails: builder.query({
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}`
            }),
            keepUnusedDataFor: 5, // 5 seconds
        }),
        createProduct: builder.mutation({
            query: () => ({
              url: `${PRODUCTS_URL}`,
              method: 'POST',
            }),
            invalidatesTags: ['Product'],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
              url: `${PRODUCTS_URL}/${data.productId}`,
              method: 'PUT',
              body: data,
            }),
            invalidatesTags: ['Product'],
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
              url: `/api/upload`,
              method: 'POST',
              body: data,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
              url: `${PRODUCTS_URL}/${productId}`,
              method: 'DELETE',
            }),
            providesTags: ['Product'],
        }),
    }),
});
export const {
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
  } = productsApiSlice;