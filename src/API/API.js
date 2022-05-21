import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';

export async function getMovies(page) {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US&page=${page}`
  );
  try {
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchMovie(query, page) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`
  );
  try {
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmById(filmId) {
  try {
    const axiosFilmId = await axios.get(
      `${BASE_URL}movie/${filmId}?api_key=${KEY}`
    );
    return axiosFilmId.data;
  } catch (error) {
    console.log(error);
  }
}
