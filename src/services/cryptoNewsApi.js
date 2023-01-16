import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '84c143d4f2msh3dc3a176c01524ep11d3c9jsnf1dacb849802',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

    const cryptoNewsHeaders = {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "0528172228msh85e4e839297a688p10fac7jsn961a84f4d039",
    };

    export const cryptoNewsApi = createApi({
      reducerPath: "cryptoNewsApi",
      baseQuery: fetchBaseQuery({
        baseUrl: "https://bing-news-search1.p.rapidapi.com",
        headers: cryptoNewsHeaders,
      }),
      // The code below builds out all of the Bing News Search API endpoints we're interested in calling.
      endpoints: (builder) => ({
        getCryptoNews: builder.query({
          query: ({ newsCategory, count }) =>
            `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        }),
      }),
    });

    export const { useGetCryptoNewsQuery } = cryptoNewsApi;