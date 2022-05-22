const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function FetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
}

export function FetchFilmById(filmId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${filmId}?api_key=${KEY}`);
}

export function FetchFilmCast(filmId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${filmId}/credits?api_key=${KEY}`
  );
}
export function FetchFilmReviews(filmId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${filmId}/reviews?api_key=${KEY}`
  );
}
export function FetchFilmSearch(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  );
}

// export async function getMovies(page) {
//   const response = await axios.get(
//     `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US&page=${page}`
//   );
//   try {
//     const data = response.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function fetchSearchMovie(query, page) {
//   const response = await axios.get(
//     `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`
//   );
//   try {
//     const data = response.data;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getFilmById(filmId) {
//   try {
//     const axiosFilmId = await axios.get(
//       `${BASE_URL}movie/${filmId}?api_key=${KEY}`
//     );
//     return axiosFilmId.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
