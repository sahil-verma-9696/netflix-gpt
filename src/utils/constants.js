export const TMDB_API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTMxMWJhNzMzZjkzZDZlYjNkNzI5MzFlMzU5OWI5ZiIsIm5iZiI6MTcyOTM5NjAzNC45MTQ1NjIsInN1YiI6IjY2ZWYzMDk1NGE3ZjBiMThiMDI2MWZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TzNbmU1c-esoKLUP3qXuq6t4wtpBkJkYqwRCX-h2Gi0'
    }
};


// all api
export const TMDB_NOWPLAYINGMOVIES = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
export const TMDB_MOVIE_DETAIL = "https://api.themoviedb.org/3/movie/"
export const TMDB_TRENDING_MOVIES = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
export const TMDB_MOVIE_CAST_CREW = "https://api.themoviedb.org/3/movie/"


// image urls
export const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/"
export const TMDB_MOVIE_POSTER = "https://image.tmdb.org/t/p/w300_and_h450_face"
export const TMDB_MOVIE_BACK_DROP_POSTER = "https://image.tmdb.org/t/p/w533_and_h300_bestv2"