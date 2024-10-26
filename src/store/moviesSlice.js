import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        movieDetails: {}, // Store movie details as an object where each key is the movie_id
        castAndCrew: {

        },
        trending: {
            movies: null,
        },
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            // Store movie details by movie_id, preventing overwriting of other movies' details
            const { movie_id, details } = action.payload;
            state.movieDetails[movie_id] = details;
        },
        addTrendingMovies: (state, action) => {
            state.trending.movies = action.payload;
        },
        addCastAndCrew: (state, action) => {
            const { movie_id, details } = action.payload;
            state.castAndCrew[movie_id] = details;
        }
    }
});

export const { addNowPlayingMovies, addMovieDetails, addTrendingMovies, addCastAndCrew } = movieSlice.actions;
export default movieSlice.reducer;
