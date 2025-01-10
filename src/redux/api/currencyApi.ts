import { api } from "../api";
import { type CurrencyData } from "../../types";

export const currencyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrency: build.query<CurrencyData[], void>({
      query: () => ({
        url: "arkhiv-kursov-valyut/json/",
        method: "GET",
      }),
      providesTags: ["CURRENCY"],
    }),
    getCurrencyByDate: build.query<CurrencyData[], string>({
      query: (date) => ({
        url: `arkhiv-kursov-valyut/json/all/${date}/`,
        method: "GET",
      }),
      providesTags: ["CURRENCY"],
    }),
  }),
});

export const { useGetCurrencyQuery, useGetCurrencyByDateQuery } = currencyApi;
