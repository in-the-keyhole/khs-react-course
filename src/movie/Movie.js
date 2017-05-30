import React from 'react';
import '../App.css';

import {
  Link
} from 'react-router-dom';

function Movie(props) {

  const link = "/about/" + props.id;



  return (

    <div className="movie-detail">


    <Link to={link}>
          <img src={props.poster} alt="Poster" />
    </Link>
 


    </div>

  );

}

export default Movie