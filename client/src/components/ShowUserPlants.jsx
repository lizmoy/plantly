import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddPlantForm from './AddPlantForm';

class ShowUserPlants extends Component {
    render() {
        console.log("this.props.plants", this.props.plants)
        console.log("this.props.formData",this.props.formData)
        return(
            <div className= "plant-container">
                <div className="plants">
                    {this.props.currentUser &&
                    this.props.plants.map(plant => (
                        <Link to={`/users/${this.props.currentUser.user_id}/plants/${plant.id}`} key={Math.random()} className="plant-info">
                            <React.Fragment >
                                <p className="plant-name">{plant.name}</p>
                                <img className="plant-image" src={plant.image} alt=""/>
                            </React.Fragment>
                        </Link>
                    ))}
                </div>
                <div className="add-form">
                    <AddPlantForm
                        plants={this.props.plants}
                        formData={this.props.formData}
                        addPlant={this.props.addPlant}
                        handleFormChange={this.props.handleFormChange}
                    />
                </div>
            </div>
        )
    }
}

export default ShowUserPlants