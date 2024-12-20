import { useState, useEffect } from "react";
import { TMDB_API_OPTION } from "./../utils/constants"; // Update the path to your TMDB API configuration

const useTMDBMovies = (movieNames) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieNames || movieNames.length === 0) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const details = await Promise.all(
          movieNames.map(async (name) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
                name
              )}`,
              TMDB_API_OPTION
            );
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              return data.results[0]; // Take the first search result
            }
            return null; // No results for this name
          })
        );

        setMovieDetails(details.filter((detail) => detail)); // Filter out nulls
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie details from TMDB.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieNames]);

  return { movieDetails, loading, error };
};

export default useTMDBMovies;
