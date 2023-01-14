import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84c143d4f2msh3dc3a176c01524ep11d3c9jsnf1dacb849802',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    //prepareHeaders - Callback function that sets the required headers for every API request.
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "84c143d4f2msh3dc3a176c01524ep11d3c9jsnf1dacb849802"
      );

      return headers;
    },
  }),
  // The code below builds out all of the Coin Ranking API endpoints we're interested in calling.
  endpoints: (builder) => ({
    getCryptos: builder.query({ query: () => "/coins" }),
  }),
});

export const {
  useGetCryptosQuery
} = cryptoApi;
