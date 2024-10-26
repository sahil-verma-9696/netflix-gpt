import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTION, TMDB_NOWPLAYINGMOVIES } from "../utils/constants";
import { addNowPlayingMovies } from './../store/moviesSlice';

export function useNowPlayingMovies() {
    const nowPlayingMovie = useSelector(store => store.movies?.nowPlayingMovies);
    const dispatch = useDispatch();

    async function nowPlayingMovies() {
        try {
            const response = await fetch(TMDB_NOWPLAYINGMOVIES, TMDB_API_OPTION);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            dispatch(addNowPlayingMovies(data));
        } catch (error) {
            console.error("Failed to fetch now-playing movies:", error);
        }
    }

    useEffect(() => {
        if (!nowPlayingMovie) {
            nowPlayingMovies();
        }
    }, [nowPlayingMovie]);
}
