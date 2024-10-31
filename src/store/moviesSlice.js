import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieDetails: {},
    castAndCrew: {},
    trending: { movies: null },
    watchLists: [
      {
        id: "favourites",
        name: "favourites",
        discription: "Favourite movies list",
        movies: [],
      },
    ],
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
      const { id, name, discription } = action.payload;
      if (!state.watchLists.some((watchList) => watchList.id === id)) {
        state.watchLists.unshift({ id, name, discription, movies: [] });
      } else {
        alert(name + " already exist");
      }
    },
    addToWatchList: (state, action) => {
      const { watchListId, movie } = action.payload;
      const watchList = state.watchLists.find(
        (list) => list.id === watchListId
      );
      if (watchList && !watchList.movies.some((item) => item.id === movie.id)) {
        watchList.movies.unshift(movie);
      }
    },
    removeFromWatchList: (state, action) => {
      const { watchListId, movieId } = action.payload;
      const watchList = state.watchLists.find(
        (list) => list.id === watchListId
      );
      if (watchList) {
        watchList.movies = watchList.movies.filter(
          (movie) => movie.id !== movieId
        );
      }
    },
    deleteWatchList: (state, action) => {
      const watchListId = action.payload;
      state.watchLists = state.watchLists.filter(
        (watchList) => watchList.id !== watchListId
      );
    },

    // Favourites reducers
    addToFavourite: (state, action) => {
      const movie = action.payload;
      const favourites = state.watchLists.find(
        (list) => list.id === "favourites"
      );
      if (
        favourites &&
        !favourites.movies.some((favItem) => favItem.id === movie.id)
      ) {
        favourites.movies.unshift(movie);
      }
    },
    removeFromFavourite: (state, action) => {
      const movieId = action.payload;
      const favourites = state.watchLists.find(
        (list) => list.id === "favourites"
      );
      if (favourites) {
        favourites.movies = favourites.movies.filter(
          (movie) => movie.id !== movieId
        );
      }
    },
    clearFavourites: (state) => {
      const favourites = state.watchLists.find(
        (list) => list.id === "favourites"
      );
      if (favourites) {
        favourites.movies = [];
      }
    },
  },
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
  clearFavourites,
} = movieSlice.actions;

export default movieSlice.reducer;
