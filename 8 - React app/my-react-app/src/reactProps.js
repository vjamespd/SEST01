import React, { Component } from 'react';

// Child Component
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0};
    }

    handleClicks = () => {
        this.setState({clicks: this.state.clicks + 1});
    }
    render(){
        return (
            <div>
                <h2>He;o, {this.props.name}</h2> {/* Display name from props*/}
                <p>You have clicked the button {this.state.clicks} times.</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    };
};



// Parent Component
class Parent extends Component{
    render(){
        return(
            <div>
                <h1>Props and State Example</h1>
                <Child name="Alice"/>
                <Child name="Bob"/>
            </div>
        );
    }
}
export default Parent;