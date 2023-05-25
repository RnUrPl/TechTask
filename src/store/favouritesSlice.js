import { createSlice } from "@reduxjs/toolkit";

const FAVOURITE_KEY = 'techtask'

const initialState = {
    favourites: JSON.parse(localStorage.getItem(FAVOURITE_KEY) ?? '[]')
}

const favouriteSlice = createSlice({
    name: 'favouriteRepos',
    initialState,
    reducers: {
        setFavourite: (state,action) => {
            state.favourites.push(action.payload)
            localStorage.setItem(FAVOURITE_KEY, JSON.stringify(state.favourites))
        },
        deleteFavourite: (state, action) => {
            state.favourites = state.favourites.filter(fav => fav.id != action.payload.id)
            localStorage.setItem(FAVOURITE_KEY, JSON.stringify(state.favourites))
        }
    }
})


export const favouriteActions= favouriteSlice.actions
export default favouriteSlice.reducer