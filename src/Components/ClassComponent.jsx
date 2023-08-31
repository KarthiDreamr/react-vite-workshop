import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Class Component" // set the title property in state
        };
    }


    changeValue(){
        this.setState({title:"Class Component Modified"})
    }
        

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>Class Component Export</h2>
                <button on onClick={()=>this.changeValue()}>click to modify</button>

            </div>
        );
    }
}

export default ClassComponent;