import React, { Component } from 'react'

export default class Bands extends Component {
    render() {
        const allBands = this.props.bands
        return (
            <div>
                <ul>
                    {allBands.map(band => <li key="band ">{band.name}</li>)}
                </ul>
            </div>
        )
    }
}