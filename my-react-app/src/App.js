// App.js
import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

const movieTitles = [
    'If Only',
    'Iron Man',
    'Fronzen',
    'Hello Ghost',
    'Casper'
];

const movieImages = [
  'http://img.movist.com/?img=/x00/00/91/00_p1.jpg',
  'https://chakuti.files.wordpress.com/2011/01/iron_man_v3.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq-vqr_YmVsOJEQoLtmVDS8DeP6MWnRuUcOOI2MrtneR0EZgu4A',
  'http://image.cine21.com/resize/cine21/poster/2010/1213/M0010011__[X230,330].jpg',
  'https://m.media-amazon.com/images/M/MV5BZThhYTlhMDUtMDhjZi00MTljLTkwMDYtOGU3ZjVlMWE4NDk4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR5,0,182,268_AL_.jpg'
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Movie title={movieTitles[0]} poster={movieImages[0]}/>
                <Movie title={movieTitles[1]} poster={movieImages[1]}/>
                <Movie title={movieTitles[2]} poster={movieImages[2]}/>
                <Movie title={movieTitles[3]} poster={movieImages[3]}/>
                <Movie title={movieTitles[4]} poster={movieImages[4]}/>
            </div>
        );
    }
}

export default App;
