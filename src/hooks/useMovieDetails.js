import { useEffect } from "react";
import { TMDB_API_OPTION, TMDB_MOVIE_DETAIL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from './../store/moviesSlice'

export function useMovieDetails(movie_id) {
    const dispatch = useDispatch();

    // Fetch existing movie details from the store
    const movieDetails = useSelector((store) => store.movies?.movieDetails[movie_id]);

    async function getMovieDetail(retries = 3) {
        // Check if movie details are already available in the store
        if (movieDetails) return;

        console.log("Fetching movie details...");
        try {
            const response = await fetch(TMDB_MOVIE_DETAIL + movie_id, TMDB_API_OPTION);
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            dispatch(addMovieDetails({ movie_id, details: data }));
        } catch (error) {
            console.error("Failed to fetch cast and crew:", error);
            if(retries > 0){
                console.log(`Retrying... (${3 - retries + 1}/3)`);
                setTimeout(() => getMovieDetail(retries - 1), 1000); 
            }
        }

    }

    useEffect(() => {
        // Trigger the effect only if movie_id is present and movieDetails aren't cached
        if (movie_id && !movieDetails) {
            getMovieDetail();
        }
    }, [movie_id, movieDetails]); // Dependency on movie_id and cached movieDetails
}
