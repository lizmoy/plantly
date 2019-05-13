import React, { Component } from 'react'
import { withRouter } from 'react-router'
import x from '../images/modal_x.png'

class Modal extends Component {
    render(){    
    console.log("this.props.show", this.props.show)
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none"
    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <button className="x-button"><img src={x} className="modal-x" alt="" onClick={this.props.hideModal}/></button>
                <div className="modal-body">
                    <p className="modal-message">Are you sure you want to delete this plant?</p>
                </div>
                <div className="delete">
                    <button className="delete-button" onClick={() => {
                        this.props.deletePlant(this.props.plant)
                        this.props.history.push(`/users/${this.props.currentUser.user_id}`)
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
    }
}
export default withRouter(Modal)