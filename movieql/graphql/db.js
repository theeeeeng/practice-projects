// db.js

let movies = [
    {
        id: 0,
        name: '너의 결혼식',
        score: 4.5
    },
    {
        id: 1,
        name: '상류사회',
        score: 1.0
    },
    {
        id: 2,
        name: '어벤져스: 인피니티 워',
        score: 5.0
    },
    {
        id: 3,
        name: '블랙팬서',
        score: 3.5
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies;
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
  const movie = {
      id: movies.length,
      name: name,
      score: score
  }
  movies.push(movie);
  return movie;
};