import React from 'react'

// display the list of bands
const Bands = props => {
    const bands = props.bands.map((band, index) => {
        // debugger
        return <li key={index}>{band.name}</li>
    })
    return <ul>{bands}</ul>
}

export default Bands;