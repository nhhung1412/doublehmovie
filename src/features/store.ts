import { configureStore } from "@reduxjs/toolkit";
import FavoriteMoviesSlice from "./slices/FavoriteMoviesSlice";


export const store = configureStore({
    reducer: {
        favoriteMovies: FavoriteMoviesSlice
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch