export const postreq = (img) => {
  console.log("Action post working")
  return ({
    type: 'POST',
    imgs: img,
  })
}

export const upCoords = (coords) => {
  // console.log("Action post working.......")
  return ({
    type: 'UP_COORDS',
    newCoords: coords,
  })
}

export const nextImage = () => {
  console.log("Action next image working.......")
  return ({
    type: 'NEXT_IMAGE',
  })
}
