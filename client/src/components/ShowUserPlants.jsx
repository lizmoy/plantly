import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ShowUserPlants extends Component {

    render() {
        return(
            <div className= "plant-container">
                {this.props.currentUser &&
                this.props.plants.map(plant => (
                    <Link to="/user/plant">
                        <div className="plant-info">
                        <h3>Name: {plant.name}</h3>
                        <img className="plant-image" src={plant.image} alt=""/>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

export default ShowUserPlants