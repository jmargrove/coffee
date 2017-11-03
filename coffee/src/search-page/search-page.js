import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postreq } from './../action/actions.js';
import MapLoad from './../map-load/map-load.js'
import './search-page.css';

const mapDispatchTo = (dispatch) => ({
  postreq: (data) => dispatch(postreq(data))
})

const mapImagesTo = (state) => ({
  images: state.rplot,
  coords: state.coords
})


class Search extends Component {
  postCoords(x, y){
    fetch('http://localhost:8080/Rcode', {
      body: JSON.stringify({xcoord: x, ycoord: y}),
      headers: {'Content-Type' : 'application/json'},
      method: 'POST',
    })
    .then(resp => resp.json())
    .then(r => this.props.postreq(r))
  }


  render() {
    console.log("these are the props", this.props.coords)
    return (
        <div className="main-page">
          <form onSubmit={(e) =>
            {e.preventDefault()
            this.postCoords(this.refs.Y.value, this.refs.X.value)}} className="coord-box">
            <label>X:</label>
              <input ref="X" className="xcoord" value={this.props.coords.lat}/>
            <label>Y:</label>
              <input ref="Y"className="ycoord" value={this.props.coords.lng}/>
            <button className="button">send</button>
          </form>
          <div className="google-maps">
            <MapLoad/>
          </div>
        </div>
    );
  }
}

// <div className="image-precip">
//   <img src={this.props.images[0]}/>
// </div>
export default connect(mapImagesTo, mapDispatchTo)(Search);
