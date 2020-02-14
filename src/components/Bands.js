import React from 'react'

// map the band names
const Bands = (props) => {
   const bands = props.bands.map((band, index) => {
      return <li key={index}> {band.name} </li>
   })


   return (
      <ul>
         {bands}
      </ul>
   )

}

export default Bands