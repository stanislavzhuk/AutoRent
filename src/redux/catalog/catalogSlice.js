import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const providesTagsForAdverts = result =>
  result
    ? [
        ...result.map(({ id }) => ({ type: 'adverts', id })),
        { type: 'adverts', id: 'LIST' },
      ]
    : [{ type: 'adverts', id: 'LIST' }];

export const advertsApi = createApi({
  reducerPath: 'adverts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6500b83518c34dee0cd555f8.mockapi.io/',
  }),
  tagTypes: ['adverts'],
  endpoints: builder => ({
    getAdverts: builder.query({
      query: () => 'adverts',
      providesTags: providesTagsForAdverts,
    }),
  }),
});
