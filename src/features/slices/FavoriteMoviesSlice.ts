import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { Imovies } from "../../Type"

interface IState {
    favoriteMovies: Imovies[]
}

const initialState: IState = {
    favoriteMovies: localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies') || "") : []
}

const FavoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState,
    reducers: {
        addFavoriteMovie: (state, action: PayloadAction<Imovies>) => {
            const itemIndex = state.favoriteMovies.findIndex(e => e.id === action.payload.id)
            if (itemIndex >= 0) {
                toast.info('Đã có trong danh sách yêu thích!')
            } else {
                const newFavoriteList = action.payload
                state.favoriteMovies.push(newFavoriteList)
                toast.success('Đã thêm vào danh sách yêu thích!')
            }
            localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
        },
        removeFavoriteMovie: (state, action: PayloadAction<any>) => {
            const newFavoriteList = state.favoriteMovies.filter((item) => item.id !== action.payload.id)
            state.favoriteMovies = newFavoriteList
            toast.success('Đã xóa!')
            localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
        },
        clearAllMovies: (state) => {
            state.favoriteMovies = []
            toast.error('Đã xóa hết!')
            localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
        }
    }
})

export const { addFavoriteMovie, removeFavoriteMovie, clearAllMovies } = FavoriteMoviesSlice.actions
export default FavoriteMoviesSlice.reducer
