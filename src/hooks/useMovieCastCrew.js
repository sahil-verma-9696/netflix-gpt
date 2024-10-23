import { useEffect } from "react";
import { TMDB_API_OPTION, TMDB_MOVIE_CAST_CREW } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from './../store/moviesSlice'
export function useMovieCastCrew(movie_id) {
    const dispatch = useDispatch();
    async function getMovieCastCrew() {
        const responce = await fetch(TMDB_MOVIE_CAST_CREW + movie_id + "/credits", TMDB_API_OPTION);
        const data = await responce.json();
        dispatch(addMovieDetails(data));
        console.log(data);
    }

    useEffect(() => {
        getMovieCastCrew()
    }, []);
}