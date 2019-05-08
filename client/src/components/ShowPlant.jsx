import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ShowPlant extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    const { plants, match: { params: { name } } } = this.props
    plants.find(plant => {
        if (plant.name === name) {
            this.props.getPlant(plant)
        }
    })
    }
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
            <div>
                <div className="plant-details">
                    <img className="plant-image" src={selectedPlant.image} alt=""/>
                    <p>Description: {selectedPlant.description}</p>
                    <p>Size: {selectedPlant.size}</p>
                    <p>Light: {selectedPlant.light}</p>
                    <p>Water: {selectedPlant.water}</p>
                    <p>Humidity: {selectedPlant.humidity}</p>
                </div>
                <button onClick={() =>{
                    this.props.deletePlant(this.props.plant)
                    this.props.history.push(`/users/${this.props.currentUser.user_id}`)
                }}>Delete Plant</button>
            </div>
        }
      </div>
    )
  }
}

export default withRouter(ShowPlant)

