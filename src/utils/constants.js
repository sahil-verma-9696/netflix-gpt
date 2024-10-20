export const TMDB_API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTMxMWJhNzMzZjkzZDZlYjNkNzI5MzFlMzU5OWI5ZiIsIm5iZiI6MTcyOTM5NjAzNC45MTQ1NjIsInN1YiI6IjY2ZWYzMDk1NGE3ZjBiMThiMDI2MWZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TzNbmU1c-esoKLUP3qXuq6t4wtpBkJkYqwRCX-h2Gi0'
    }
};

export const TMDB_NOWPLAYINGMOVIES = 'https://api.themoviedb.org/3/movie/now_playing?page=1'