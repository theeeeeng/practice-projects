// MoviePoster.js
import React, { Component } from 'react';
import './MoviePoster.css';

class MoviePoster extends Component {
    render () {
        return (
            <div>
                <img src={this.props.poster}/>
            </div>
        )
    }
}

export default MoviePoster;