import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTION, TMDB_TRENDING_MOVIES } from "../utils/constants";
import { addTrendingMovies } from './../store/moviesSlice'

export function useTrendingFetch() {
    const dispatch = useDispatch();
    async function trendingFetch() {
        const responce = await fetch(TMDB_TRENDING_MOVIES, TMDB_API_OPTION);
        const data = await responce.json();
        dispatch(addTrendingMovies(data));
    }

    useEffect(() => {
        trendingFetch();
    }, []);

}
