import React, { Component } from 'react';


class MovieHeader extends Component {

   constructor(props) {

       super(props);
       this.searchText = props.searchText;
     
   }
  

   render() {

        const header = (
            <div>
                <h2>Now Playing</h2>
                <button>Logout</button>
                <input autoFocus type="text" placeholder={this.searchText}/> </div>);  
                

    return(header)
}

}

export default MovieHeader