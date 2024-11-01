import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kl-movies-api.vercel.app/movies'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<reponseApi, SearchParams>({
      query: ({ search, page = 1, year }) => {
        let queryString = `api/?format=json&Title=${search}&page=${page}`
        if (year) {
          queryString += `&year=${year}`
        }
        return queryString
      }
    })
  })
})

export const { useGetMoviesQuery } = api
export default api
