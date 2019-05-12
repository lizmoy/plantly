import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = { showModal: false }
    }

    showModal(){
        this.setState({ showModal: true })
    }

    hideModal(){
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
