import React, { Component } from 'react';
import '../App.css';
import Movie from './Movie.js';
import Api from '../util/Api.js';
import Header from './MovieHeader.js';

const API_URL = "http://www.omdbapi.com/?s=";

class Movies extends Component {

  static searchText = "a";

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.movieList();
  }

  search(e) {

   if (e.key === 'Enter') {
      Movies.searchText = e.target.value;
      this.movieList();
    }

  }

  movieList() {

    let api = new Api();
    let _this = this;
    let cb = function (code, data) { _this.setState({ movies: JSON.parse(data).Search }); };
    let url = API_URL + Movies.searchText + "&y=2017";
    api.get(url, cb);

  }

  render() {
    let items = [];

    // Add fetched movies to array
    if (this.state && this.state.movies) {
      this.state.movies.forEach(movie => {
        if (movie.Poster !== "N/A") {
          items.push(<li key={movie.imdbID}><Movie title={movie.Title} poster={movie.Poster} id={movie.imdbID} /> </li>);
        }
      });

    
    // Return HTML Display Header and Items
      return (
        <div className="movie-container" onKeyUp={this.search.bind(this)}>
           <Header searchText={Movies.searchText}/>
          <ul>
            {items}
          </ul>
        </div>

      );
    }
  
    // Or, display No Results
    return (<div className="movie-container"  onKeyUp={this.search.bind(this)} > <Header searchText={Movies.searchText}  /> No Results found </div>);


  }

}


export default Movies