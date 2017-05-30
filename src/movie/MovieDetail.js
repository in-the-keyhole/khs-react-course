import React, { Component } from 'react';
import Api from '../util/Api.js';
import {
  Link
} from 'react-router-dom';


const API_URL = "http://www.omdbapi.com/?i=";

class MovieDetail extends Component {

  constructor(props) {

    super(props);
    if (props.match) {
       this.API_URL = API_URL + props.match.params.id;
    } else {
        this.API_URL = API_URL + props.id;
    }
    this.movie = null;
  

  }

  componentDidMount() {

    let api = new Api();
    let _this = this;
    let cb = function (code, data) { _this.setState({ movie: JSON.parse(data) }); };
    let url = this.API_URL;
    api.get(url, cb);

  }

  render() {

    if (this.state && this.state.movie) {

      return (
      <div className="movie-container">  
        <Link to="/"><span className="close"></span></Link>
      <div className="movie-header"><img src={this.state.movie.Poster} alt="Movie Poster" /></div>
        <div className="movie-header">
          <h2><b>Title:</b> {this.state.movie.Title}</h2>
          <h3><b>Genre:</b> {this.state.movie.Genre}</h3>
          <h3><b>Released:</b> {this.state.movie.Released}</h3>
          <h3><b>IMDB Rating:</b> {this.state.movie.imdbRating}</h3>
          <h3><b>Plot:</b></h3>
          <h3>
           {this.state.movie.Plot}
          </h3>  

          <span className="close"> </span>
         </div>
        </div> )

    }


    return (<h1> Fetching... </h1>)

  }
}

export default MovieDetail
