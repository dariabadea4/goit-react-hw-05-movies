const controller = new AbortController();
const signal = controller.signal;

const API_THEMOVIEDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=d3d5044f23d7b8347f525b76e517e169';

export const fetchTrendingMovies = async () => {
  return await fetch(
    `${API_THEMOVIEDB_BASE_URL}/trending/movie/day?language=en-US&${API_KEY}`,
    { signal }
  )
    .then(res => res.json())
    .then(res => res.results);
};

export const fetchSearch = async search => {
  return await fetch(
    `${API_THEMOVIEDB_BASE_URL}/search/movie?query=${search}&${API_KEY}`,
    { signal }
  )
    .then(res => res.json())
    .then(res => res.results);
};

export const fetchDetailsMovie = async id => {
  return await fetch(
    `${API_THEMOVIEDB_BASE_URL}/movie/${id}?language=en-US&${API_KEY}`,
    { signal }
  )
    .then(res => res.json())
    .then(res => res);
};

export const fetchCast = async id => {
  return await fetch(
    `${API_THEMOVIEDB_BASE_URL}/movie/${id}/credits?language=en-US&${API_KEY}`,
    { signal }
  )
    .then(res => res.json())
    .then(res => res.cast);
};

export const fetchReviews = async id => {
  return await fetch(
    `${API_THEMOVIEDB_BASE_URL}/movie/${id}/reviews?language=en-US&${API_KEY}`,
    { signal }
  )
    .then(res => res.json())
    .then(res => res.results);
};