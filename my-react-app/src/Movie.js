// Movie.js
import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';

class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    };
    render() {
        return (
            <div className="Movie">
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Movie;