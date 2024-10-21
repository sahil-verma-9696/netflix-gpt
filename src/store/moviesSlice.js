import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        movieDetails : null,
        trending : {
            movies : null,
        }
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieDetails : (state,action)=>{
            state.movieDetails = action.payload;
        },
        addTrendingMovies : (state,action)=>{
            state.trending.movies = action.payload;
        }
    }
})

export const { addNowPlayingMovies,addMovieDetails,addTrendingMovies } = movieSlice.actions;
export default movieSlice.reducer;