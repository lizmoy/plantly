import React, { Component } from 'react'
// import { withRouter } from 'react-router'

class ShowUserPlants extends Component {

    render() {
        return(
            <div className= "plant-container">
                {this.props.plants.map(plant => (
                    <div className="plant-details">
                    <h3>Name: {plant.name}</h3>
                    <img className="plant-image" src={plant.image} alt=""/>
                    <p>Description: {plant.description}</p>
                    <p>Size: {plant.size}</p>
                    <p>Light: {plant.light}</p>
                    <p>Water: {plant.water}</p>
                    <p>Humidity: {plant.humidity}</p>
                    <p>User: {plant.user_id}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ShowUserPlants