import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTION, TMDB_NOWPLAYINGMOVIES } from "../utils/constants";
import { addNowPlayingMovies } from './../store/moviesSlice'



export function useNowPlayingMovies() {
    const dispatch = useDispatch();
    async function nowPlayingMovies() {
        const responce = await fetch(TMDB_NOWPLAYINGMOVIES, TMDB_API_OPTION);
        const data = await responce.json();
        dispatch(addNowPlayingMovies(data));
    }

    useEffect(() => {
        nowPlayingMovies();
    }, []);

}
