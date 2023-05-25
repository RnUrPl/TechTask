import {configureStore} from '@reduxjs/toolkit'
import { superjobApi } from './superJob/superjobApi'
import filterOptionsReducer from './FilterSlice'
import favouriteReposReducer  from './favouritesSlice'



export const store = configureStore({
    reducer: {
        [superjobApi.reducerPath]: superjobApi.reducer,
        filterOptions: filterOptionsReducer,
        favouriteRepos: favouriteReposReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(superjobApi.middleware)
})
