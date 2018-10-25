// App.js
import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Movie from "./Movie";

const movies = [
    {
        title: 'If Only',
        poster: 'http://img.movist.com/?img=/x00/00/91/00_p1.jpg'
    },
    {
        title: 'Iron Man',
        poster: 'https://chakuti.files.wordpress.com/2011/01/iron_man_v3.jpg'
    },
    {
        title: 'Fronzen ',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq-vqr_YmVsOJEQoLtmVDS8DeP6MWnRuUcOOI2MrtneR0EZgu4A'
    },
    {
        title: 'Hello Ghost',
        poster: 'http://image.cine21.com/resize/cine21/poster/2010/1213/M0010011__[X230,330].jpg'
    },
    {
        title: 'Casper',
        poster: 'https://m.media-amazon.com/images/M/MV5BZThhYTlhMDUtMDhjZi00MTljLTkwMDYtOGU3ZjVlMWE4NDk4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR5,0,182,268_AL_.jpg'
    }
];

class App extends Component {
    static protoTypes = {
        title: PropTypes.string,
        poster: PropTypes.string
    }
    render() {
        return (
            <div className="App">
                {movies.map((movie, index) => {
                    return <Movie key={index} title={movie.title} poster={movie.poster}/>
                })}
            </div>
        );
    }
}

export default App;
