import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import HomeShim from "../shimmer/HomeShim";
import MoviesCont from "../components/MoviesCont";
import { useTrendingFetch } from "../hooks/useTrendingFetch";
import Banner from "../components/Banner";
import HorizontalContShim from "../shimmer/HorizontalContShim";
import BannerShim from "../shimmer/BannerShim";

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
      {trendingMovies ? <Banner/> : <BannerShim/>}
      <h1 className="text-3xl font-semibold mt-6">Trending</h1>
      {trendingMovies ?<MoviesCont movieslst={trendingMovies} />:<HorizontalContShim/>}
      <h1 className="text-3xl font-semibold mt-6">Now Playing Movies</h1>
      {nowPlayingMovieslst ? <MoviesCont movieslst={nowPlayingMovieslst} /> : <HorizontalContShim/>}
    </div>
  );
}

export default Home;
