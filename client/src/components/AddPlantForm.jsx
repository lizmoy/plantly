import React, { Component } from 'react'

export default class PlantForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdd: false
        }
    }
    render() {
        console.log("this.props.formData", this.props.formData)
        return (
            <div>
                
                {this.state.isAdd ?
                    <div>
                        <form className="add-plant-form" onSubmit={(e) => {
                            e.preventDefault()
                            this.props.addPlant()
                            this.setState({ isAdd: false })
                        }}>
                            <div className="plant-form-title">Add a New Plant</div>
                            <input className="plant-form-input" name="name" type="text" value={this.props.formData.name} onChange={this.props.handleFormChange} placeholder="name"/>
                            <textarea className="plant-form-input" name="description" type="text" value={this.props.formData.desciption} onChange={this.props.handleFormChange} placeholder="description"/>
                            <input className="plant-form-input" name="size" type="text" value={this.props.formData.size} onChange={this.props.handleFormChange} placeholder="size"/>
                            <input className="plant-form-input" name="light" type="text" value={this.props.formData.light} onChange={this.props.handleFormChange} placeholder="light"/>
                            <input className="plant-form-input" name="water" type="text" value={this.props.formData.water} onChange={this.props.handleFormChange} placeholder="water"/>
                            <input className="plant-form-input" name="humidity" type="text" value={this.props.formData.humidity} onChange={this.props.handleFormChange} placeholder="humidity"/>
                            <input className="plant-form-input" name="image" type="text" value={this.props.formData.image} onChange={this.props.handleFormChange} placeholder="image"/>
                            <button className="add-plant-submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button className="add-plant-button" onClick={() => {
                        this.setState({ isAdd: true })
                    }}>Add Plant</button>
                }
            </div>
        )
    }
}
