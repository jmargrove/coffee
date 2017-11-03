
const defaultState = {
  rainfallMap: ['http://localhost:8080/Rcode/rainfall-maps/jan.jpg', 'jan'],
  coords: {lat: 41.459, lng: 1.6369, zoom: 7}}

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
let count = -1
const reducer = (state = defaultState, action) => {
  console.log("pre-reduce")
  if(action.type === 'POST') {
    console.log("the state:", state)
    return ({...state})
  }
  else if (action.type === 'UP_COORDS') {
    console.log("update coords: ", action.newCoords)
    return {...state,
      coords: {lat: action.newCoords.lat, lng: action.newCoords.lng, zoom: action.newCoords.zoom}}
  }
  else if( action.type === 'NEXT_IMAGE') {
    console.log("change image")
    if(count > 10) {
      console.log("count before", count)
      count = -1;
      console.log("count after", count)
    }
    count++
    return ({...state,
      rainfallMap:[('http://localhost:8080/Rcode/rainfall-maps/' + months[count] + '.jpg'), months[count]]
    })
  }
  return state;
}



export default reducer
