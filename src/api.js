import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '02e5f00ddb1c1fba11333a12be4ff5ba';

export async function getTrendingMovies() {
  const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
}

export async function getMovieDetals(movie_id) {
  const response = await axios(`/movie/${movie_id}?api_key=${API_KEY}`);
  return response.data;
}
export async function getMovieCredits(movie_id) {
  const response = await axios(`/movie/${movie_id}/credits?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieReviews(movie_id) {
  const response = await axios(`/movie/${movie_id}/reviews$api_key=${API_KEY}`);
  return response.data;
}
