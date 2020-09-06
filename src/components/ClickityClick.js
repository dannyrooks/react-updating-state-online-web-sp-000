import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super();

        // Define initial state:
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        //  Update state here
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
        
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
