import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTION, TMDB_TRENDING_MOVIES } from "../utils/constants";
import { addTrendingMovies } from './../store/moviesSlice';

export function useTrendingFetch() {
    const dispatch = useDispatch();

    async function trendingFetch(retries = 3) {
        try {
            const response = await fetch(TMDB_TRENDING_MOVIES, TMDB_API_OPTION);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(addTrendingMovies(data));
        } catch (error) {
            console.error("Failed to fetch trending movies:", error);

            // Retry if retries are left
            if (retries > 0) {
                console.log(`Retrying... (${3 - retries + 1}/3)`);
                setTimeout(() => trendingFetch(retries - 1), 1000); // retry after 1 second
            }
        }
    }

    useEffect(() => {
        trendingFetch();
    }, []);
}
