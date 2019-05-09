import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ShowPlant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false
		}
	}

	componentDidMount() {
		const { plants, match: { params: { id } } } = this.props
		plants.find(plant => {
			if (plant.id === parseInt(id)) {
				this.props.getPlant(plant)
			}
		})
	}
	render() {
		console.log("this.props.plants", this.props.plants)
		console.log("plant", this.props.plant)
		console.log("this.props.match.params", this.props.match.params)
		const { plants, match: { params: { id } } } = this.props
		const selectedPlant = plants.find(plant => {
			return plant.id === parseInt(id)
		})
	
		console.log('selectedPlant:', selectedPlant)
		return (
			<div>
				{this.props.plants &&
					<div>
						<div className="plant-details">
							<img className="plant-image" src={selectedPlant.image} alt="" />
							<div className="plant-description">
								<p>{selectedPlant.name}</p>
								<p>Description: {selectedPlant.description}</p>
								<p>Size: {selectedPlant.size}</p>
								<p>Light: {selectedPlant.light}</p>
								<p>Water: {selectedPlant.water}</p>
								<p>Humidity: {selectedPlant.humidity}</p>
							</div>
						</div>
						{this.state.isEdit ?
								<form className="plant-update-form" onSubmit={(e) => {
										e.preventDefault()
										this.props.updatePlant(this.props.plant)
										this.setState({
												isEdit: false
										})
								}}>
										<div className="plant-form-title">Update Plant</div>
										<input className="plant-form-input" name="name" type="text" value={this.props.formData.name} onChange={this.props.handleFormChange} placeholder="name"/>
										<textarea className="plant-form-input" name="description" type="text" value={this.props.formData.desciption} onChange={this.props.handleFormChange} placeholder="description"/>
										<input className="plant-form-input" name="size" type="text" value={this.props.formData.size} onChange={this.props.handleFormChange} placeholder="size"/>
										<input className="plant-form-input" name="light" type="text" value={this.props.formData.light} onChange={this.props.handleFormChange} placeholder="light"/>
										<input className="plant-form-input" name="water" type="text" value={this.props.formData.water} onChange={this.props.handleFormChange} placeholder="water"/>
										<input className="plant-form-input" name="humidity" type="text" value={this.props.formData.humidity} onChange={this.props.handleFormChange} placeholder="humidity"/>
										<input className="plant-form-input" name="image" type="text" value={this.props.formData.image} onChange={this.props.handleFormChange} placeholder="image"/>
										<button>Submit</button>
								</form>
								:
								<button className="update-button" onClick={() => {
										this.props.setUpdateForm(this.props.plant)
										this.setState({ isEdit: this.props.plant.id })
								}}>Update Plant</button>
								
						}
						<div className="delete">
							<button className="delete-button" onClick={() => {
								this.props.deletePlant(this.props.plant)
								this.props.history.push(`/users/${this.props.currentUser.user_id}`)
							}}>Delete Plant</button>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default withRouter(ShowPlant)

