import { useEffect } from "react";
import { TMDB_API_OPTION, TMDB_MOVIE_CAST_CREW } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCastAndCrew } from './../store/moviesSlice';

export function useMovieCastCrew(movie_id) {
    const dispatch = useDispatch();
    const castAndCrew = useSelector(store => store.movies?.castAndCrew[movie_id]);

    async function getMovieCastCrew(retries = 3) {
        try {
            const response = await fetch(TMDB_MOVIE_CAST_CREW + movie_id + "/credits", TMDB_API_OPTION);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            dispatch(addCastAndCrew({ movie_id: movie_id, details: data }));
        } catch (error) {
            console.error("Failed to fetch cast and crew:", error);

            // Retry if we have retries left
            if (retries > 0) {
                console.log(`Retrying... (${3 - retries + 1}/3)`);
                setTimeout(() => getMovieCastCrew(retries - 1), 1000); // retry after 1 second
            }
        }
    }

    useEffect(() => {

        // restrict the un-necessary api calls
        if (movie_id && !castAndCrew) getMovieCastCrew();
    }, [movie_id, castAndCrew]);
}
