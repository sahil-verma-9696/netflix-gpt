import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        movieDetails: {},
        castAndCrew: {},
        trending: { movies: null },
        watchLists: {}, // Object to store multiple watchlists by unique IDs
        favourites: []
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            const { movie_id, details } = action.payload;
            state.movieDetails[movie_id] = details;
        },
        addTrendingMovies: (state, action) => {
            state.trending.movies = action.payload;
        },
        addCastAndCrew: (state, action) => {
            const { movie_id, details } = action.payload;
            state.castAndCrew[movie_id] = details;
        },

        // Multiple Watchlists reducers
        createWatchList: (state, action) => {
            const { id, name } = action.payload;
            if (!state.watchLists[id]) {
                state.watchLists[id] = { name, movies: [] };
            }
        },
        addToWatchList: (state, action) => {
            const { watchListId, movie } = action.payload;
            const watchList = state.watchLists[watchListId];
            if (watchList && !watchList.movies.some(item => item.id === movie.id)) {
                watchList.movies.push(movie);
            }
        },
        removeFromWatchList: (state, action) => {
            const { watchListId, movieId } = action.payload;
            const watchList = state.watchLists[watchListId];
            if (watchList) {
                watchList.movies = watchList.movies.filter(movie => movie.id !== movieId);
            }
        },
        deleteWatchList: (state, action) => {
            const watchListId = action.payload;
            delete state.watchLists[watchListId];
        },

        // Favourites reducers
        addToFavourite: (state, action) => {
            const movie = action.payload;
            if (!state.favourites.some(favItem => favItem.id === movie.id)) {
                state.favourites.unshift(movie);
            }
        },
        removeFromFavourite: (state, action) => {
            const movieId = action.payload;
            state.favourites = state.favourites.filter(movie => movie.id !== movieId);
        },

        // Additional helper reducers if needed
        clearFavourites: (state) => {
            state.favourites = [];
        }
    }
});

export const {
    addNowPlayingMovies,
    addMovieDetails,
    addTrendingMovies,
    addCastAndCrew,
    createWatchList,
    addToWatchList,
    removeFromWatchList,
    deleteWatchList,
    addToFavourite,
    removeFromFavourite,
    clearFavourites
} = movieSlice.actions;

export default movieSlice.reducer;
