//resolvers.js

import {getMovies, getMovie, getSuggestions} from './db';

const resolvers = {
    Query: {
        movies: (_, {limit, minimum_rating}) =>
            getMovies(limit, minimum_rating),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id)
    }
};

export default resolvers;