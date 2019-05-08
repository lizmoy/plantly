import React, { Component } from 'react'

export default class UpdatePlantForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false
        }
    }
    render() {
        return (
            <div>
                {this.state.isEdit ?
                    <form onSubmit={(e) => {
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
                    <button onClick={() => {
                        this.setState({ isEdit: plant.id })
                    }}>Update Plant</button>
                }
            </div>
        )
    }
}
