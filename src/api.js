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

export async function getMovieDetails(movieId) {
  const response = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}
export async function getMovieCredits(movieId) {
  const response = await axios(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
}
