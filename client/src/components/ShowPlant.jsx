import React, { Component } from 'react'

export default class ShowPlant extends Component {
  render() {
    return (
      <div>
        {this.props.plants&&
            <div className="plant-details">
                <img className="plant-image" src={this.props.plants[0].image} alt=""/>
                <p>Description: {this.props.plants[0].description}</p>
                <p>Size: {this.props.plants[0].size}</p>
                <p>Light: {this.props.plants[0].light}</p>
                <p>Water: {this.props.plants[0].water}</p>
                <p>Humidity: {this.props.plants[0].humidity}</p>
            </div>
        }
        {/* {selectPlant &&
            <div className="plant-details">
                <p>Description: {selectPlant.description}</p>
                <p>Size: {selectPlant.size}</p>
                <p>Light: {selectPlant.light}</p>
                <p>Water: {selectPlant.water}</p>
                <p>Humidity: {selectPlant.humidity}</p>
            </div>
        } */}
      </div>
    )
  }
}

