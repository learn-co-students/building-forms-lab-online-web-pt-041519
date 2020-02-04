import React, { Component } from 'react'
import uuid from 'uuid';

export default class Bands extends Component {
    render() {
        const allBands = this.props.bands
        return (
            <div>
                <ul>
                    {allBands.map(band => <li key={uuid()}>{band.name}</li>)}
                </ul>
            </div>
        )
    }
}