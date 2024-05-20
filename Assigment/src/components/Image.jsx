import React from 'react'

const Image = ({image}) => {
  return (
      <img style={{width:"100%",height:"50%",backgroundRepeat:"no-repeat"}} src={image} />
  )
}

export default Image
