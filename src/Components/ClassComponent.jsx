import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Class Component",
            user: "",
            count: 0
        };
    }

    increaseValue = () => {
        this.setState(
            {
                count:this.state.count + 1
            }
        )
    }

    changeValue = () => {
        this.setState({ title: "Class Component Modified" })
    }

    hoverListerner = () => {
        console.log("Listerning hover ...")
    }

    changeListerner = (event) => {
        this.setState({
            user: event.target.value,
        })
    }

    render() {
        return (
            <div>
                {/* <h1>{this.props.title}</h1>                 */}
                <h1>{this.state.title}</h1>
                <h2>Class Component Export</h2>
                <p>User = {this.state.user}</p>
                <button onMouseOver={this.hoverListerner} onClick={this.changeValue}>click to modify</button>
                <br></br>
                <br></br>
                <input onChange={this.changeListerner}></input>
                <br></br>
                <br></br>
                <h2>Count = {this.state.count}</h2>
                <br></br>
                <button onClick={this.increaseValue}>Add Count</button>
            </div>
        );
    }
}

export default ClassComponent;
