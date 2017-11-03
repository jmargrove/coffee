import React, { Component } from 'react';
import { connect } from 'react-redux'
import './map-load.css';
import { upCoords } from './../action/actions.js'
import apiSTYLE from './stylesheet.json'
var GoogleMapsLoader = require('google-maps');

const mapImagesTo = (state) => ({
  // images: state.rplot[0],
  coords: state.coords
})

const mapDispatchToCoords = (dispatch) => ({
  updateCoords: (coords) => dispatch(upCoords(coords))
})

class MapLoad extends Component {
  gooLoad(x, y, fun, z){
      GoogleMapsLoader.load(function(google){

        var myLatlng = {lat: x, lng: y}

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: z,
          center: myLatlng,
          mapTypeId: 'terrain',
          styles: apiSTYLE,
        });

        var marker = new google.maps.Marker({
           position: myLatlng,
           map: map,
           title: 'Click to zoom'
         });

        google.maps.event.addListener(map, "click", function (e) {
          fun({lat: e.latLng.lat(), lng: e.latLng.lng(), zoom: map.zoom})
        });
      });
    }

  render() {
    return (
      <div>
        <head>
        </head>
          <div id="map"></div>
          <script>{this.gooLoad(this.props.coords.lat, this.props.coords.lng, this.props.updateCoords, this.props.coords.zoom)}</script>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-lTpPY74D4voFl81v3HZ_JeN45sQZ_T4&callback=initMap"
          type="text/javascript"></script>
      </div>
    );
  }
}

export default connect(mapImagesTo, mapDispatchToCoords)(MapLoad);
