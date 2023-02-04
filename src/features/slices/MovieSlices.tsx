import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMovieState, Imovies } from '../../Type'

const initialState: IMovieState = {
  movies: [],
}

export const MovieSlices = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<Imovies>) => {
      const movie = action.payload
      //   state.movies = action.payload
      state.movies.push(movie)
    },
  },
  // extraReducers : () => {

  // }
})

export const getAllMovies = (state = initialState) => state.movies

export const { addMovies } = MovieSlices.actions
export default MovieSlices.reducer
