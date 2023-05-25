import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const superjobApi = createApi({
    reducerPath: 'superjob/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://startup-summer-proxy-production.up.railway.app/2.0/',
        prepareHeaders:(headers) => {
            headers.set('X-Secret-Key', 'GEU4nvd3rej*jeh.eqp');
            headers.set('X-Api-App-Id', 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948');
            return headers;
        }
    }),
  
    endpoints: build => ({
        authenticate: build.mutation({
            query: (credentials) => ({
                url: '/oauth2/password',
                method: 'POST',
                body: credentials,
            }),
        }),
        search: build.query ({
            query: ({accesToken,catalogues,keyword,payment_from,payment_to}) =>({
                url: '/vacancies/',
                headers : {
                    Authorizhation: `Bearer ${accesToken}`
                },
                params: {
                    no_agreement:1,
                    published: 1, 
                    keyword: keyword,
                    catalogues: catalogues,
                    payment_from: payment_from,
                    payment_to: payment_to,

                }
            })
        }),
        catalog: build.query({
            query: () => ({
                url: '/catalogues/'
            })
        }),
        vacancy: build.query({
            query:(id) => ({
                url: `/vacancies/${id}`,
            }
            )
        })
    })
})

export const { useAuthenticateMutation, useSearchQuery, useCatalogQuery, useVacancyQuery } = superjobApi;
export default superjobApi