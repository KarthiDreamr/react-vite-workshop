import React, { Component } from "react";

class LifeCycleComponent extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        console.log(props)
        console.log(state)
      }

    componentDidMount(){
        console.log("Component got mounted")
    }

    handleForceUpdate = () => {
        this.forceUpdate();
      }

    render() {
        return (
            <div>
                <h1>Heading</h1>
                <button onClick={this.handleForceUpdate}>Force Update</button> 
            </div>
        );
    }
}

export default LifeCycleComponent;


