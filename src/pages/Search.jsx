import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMovies from "./../hooks/useMovies";
import useTMDBMovies from "./../hooks/useTMDBMovies";

const Search = () => {
  const [query, setQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false); // Ensures fetch only on button click
  const { movieNames, loading: moviesLoading, error: moviesError } = useMovies(triggerSearch ? query : "");
  const { movieDetails, loading: detailsLoading, error: detailsError } = useTMDBMovies(triggerSearch ? movieNames : []);

  const handleSearch = () => {
    if (!query.trim()) return;
    setTriggerSearch(true);
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
        🎥 AI-Enhanced Movie Search ✨
      </h1>
      <p className="text-gray-600 mb-6">Discover movies with the power of AI. Let us find your next favorite!</p>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="E.g., Indian romantic movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-2 border-purple-300 rounded-lg px-4 py-2 w-3/4 max-w-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-purple-500 text-white rounded-lg px-4 py-2 hover:bg-purple-600 transition"
        >
          Search
        </button>
      </div>

      {moviesLoading && <p className="text-center text-purple-500">Fetching movie names...</p>}
      {moviesError && <p className="text-center text-red-500">{moviesError}</p>}

      {detailsLoading && <p className="text-center text-purple-500">Fetching movie details from TMDB...</p>}
      {detailsError && <p className="text-center text-red-500">{detailsError}</p>}

      {!moviesLoading && !detailsLoading && triggerSearch && movieDetails.length === 0 && (
        <div className="mt-6">
          <p className="text-xl text-gray-600 mb-4">Hmm... No results found. 🧐</p>
          <p className="text-lg text-purple-500 font-semibold">
            Don’t give up! Try searching for something else. 🎬
          </p>
        </div>
      )}

      {!moviesLoading && !detailsLoading && movieDetails.length > 0 && (
        <div className="grid grid-cols-3 gap-8 mt-8">
          {movieDetails.map((movie, index) => (
            <Link
              key={index}
              to={`/movie/${movie.id}`}
              className="bg-white border-2 border-purple-200 rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.title || "Movie Not Found"}
                  className="w-full object-contain"
                />
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-bold text-purple-700 mb-2">
                    {movie.title || "Movie Not Found"}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {movie.release_date ? `Release Date: ${movie.release_date}` : "N/A"}
                  </p>
                  <p className="text-gray-700 text-sm truncate">
                    {movie.overview || "No description available."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
