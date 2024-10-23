import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import HomeShim from "../shimmer/HomeShim";
import MoviesCont from "../components/MoviesCont";
import { useTrendingFetch } from "../hooks/useTrendingFetch";
import Banner from "../components/Banner";

function Home() {
  useNowPlayingMovies();
  useTrendingFetch();

  const nowPlayingMovieslst = useSelector(
    (store) => store?.movies?.nowPlayingMovies?.results
  );
  const trendingMovies = useSelector(
    (store) => store?.movies?.trending?.movies?.results
  );

  const movies = useSelector((store) => store.movies);

  if (!movies) return <HomeShim />;

  return (
    <div className="home w-4/5 m-auto">
      

      <Banner/>
      <h1 className="text-3xl font-semibold my-2">Trending</h1>
      <MoviesCont movieslst={trendingMovies} />
      <h1 className="text-3xl font-semibold my-2">Now Playing Movies</h1>
      <MoviesCont movieslst={nowPlayingMovieslst} />
    </div>
  );
}

export default Home;
