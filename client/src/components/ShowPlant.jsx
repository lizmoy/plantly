import React, { Component } from 'react'

export default class ShowPlant extends Component {
  render() {
    console.log("this.props.plants", this.props.plants)
    console.log("this.props.match.params", this.props.match.params)
    const { plants, match: { params: { name } } } = this.props
    const selectedPlant = plants.find(plant => {
        return plant.name === name
      })
    console.log('selectedPlant:', selectedPlant)
    return (
      <div>
        {this.props.plants&&
            <div className="plant-details">
                <img className="plant-image" src={selectedPlant.image} alt=""/>
                <p>Description: {selectedPlant.description}</p>
                <p>Size: {selectedPlant.size}</p>
                <p>Light: {selectedPlant.light}</p>
                <p>Water: {selectedPlant.water}</p>
                <p>Humidity: {selectedPlant.humidity}</p>
            </div>
        }
      </div>
    )
  }
}

