import React, { Component } from 'react'

class ShowUserPlants extends Component {
    // componentDidMount(){
    //     this.props.getUserPlants(this.props.currentUser.id)
    // }
    
    render() {
        // console.log("currentUser", this.props.currentUser.id)
        return(
            <div className= "plant-container">
                {this.props.currentUser &&
                this.props.plants.map(plant => (
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