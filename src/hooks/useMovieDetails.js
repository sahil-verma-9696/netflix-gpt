import { useEffect } from "react";
import { TMDB_API_OPTION, TMDB_MOVIE_DETAIL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from './../store/moviesSlice'
export function useMovieDetails(movie_id) {
    const dispatch = useDispatch();
    async function getMovieDetail() {
        const responce = await fetch(TMDB_MOVIE_DETAIL + movie_id, TMDB_API_OPTION);
        const data = await responce.json();
        dispatch(addMovieDetails(data));
        console.log(data);
    }

    useEffect(() => {
        getMovieDetail()
    }, []);
}