import axios from 'axios';

const BASE_API_URL = 'https://yts.am/api/v2';
const LIST_MOVIES_URL = `${BASE_API_URL}/list_movies.json`; // 영화 목록 조회하는 API
const MOVIE_DETAILS_URL = `${BASE_API_URL}/movie_details.json`; // 영화 상세 정보 조회하는 API
const MOVIE_SUGGESTIONS_URL = `${BASE_API_URL}/movie_suggestions.json`; // 추천영화 조회하는 API

export const getMovies = async (limit, minimum_rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
       params: {
           limit: limit,
           minimum_rating: minimum_rating
       }
    });
    return movies;
};

export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios (MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};

export const getSuggestions = async id => {
    const {
        data: {
            data: { suggestions }
        }
    } = await axios (MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    return suggestions
};

