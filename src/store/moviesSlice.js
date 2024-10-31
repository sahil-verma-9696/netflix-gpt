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
        id: "first_watchlist",
        name: "first watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "second_watchlist",
        name: "second watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "third_watchlist",
        name: "third watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "fourth_watchlist",
        name: "fourth watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "fifth_watchlist",
        name: "fifth watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "sixth_watchlist",
        name: "sixth watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "seventh_watchlist",
        name: "seventh watchlist",
        description: "dummy description",
        movies: [],
      },
      {
        id: "favourites",
        name: "favourites",
        description: "Favourite movies list",
        movies: [{}],
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
      const { id, name, description } = action.payload;
      if (!state.watchLists.some((watchList) => watchList.id === id)) {
        state.watchLists.push({ id, name, description, movies: [] });
      }
    },
    addToWatchList: (state, action) => {
      const { watchListId, movie } = action.payload;
      const watchList = state.watchLists.find(
        (list) => list.id === watchListId
      );
      if (watchList && !watchList.movies.some((item) => item.id === movie.id)) {
        watchList.movies.push(movie);
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
