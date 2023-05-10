import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetDataResponse } from "./types";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetDataResponse>, void>({
      query: () => "/data",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
