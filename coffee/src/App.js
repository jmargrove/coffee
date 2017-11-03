import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/header.js';
import Search from './search-page/search-page.js';
import { nextImage } from './action/actions.js';
import MapLoad from './map-load/map-load.js'
import './App.css';

const mapDispatchImage = (dispatch) => ({
  nextImg: () => dispatch(nextImage())
})

const mapStateImage = (state) => ({
  imageRef: state.rainfallMap[0],
  month: state.rainfallMap[1]
})

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>

        <div className="page-2">
          <div className="stat-header"> Coffee & Climate Stats</div>
          <div className="stat-body">
            <div>
            <div> rainfall </div>
            <div className="rainfall-graph"><img className="imgs" src="http://localhost:8080/Rcode/rainfall-maps/monthly-data.jpg" /></div>
            </div>
            <div className="rainfall-map"> {this.props.month}
              <img className="imgs" onClick={()=> {this.props.nextImg()}} src={this.props.imageRef}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateImage, mapDispatchImage)(App);
