import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Class Component",
            user: ""
        };
    }


    changeValue() {
        this.setState({ title: "Class Component Modified" })
    }

    changeListerner(event) {
        console.log("Input value changed")

        this.setState({
            title: this.state.title,
            user: event.target.value,
        }

        )
    }


    render() {
        return (
            <div>
                {/* <h1>{this.props.title}</h1>                 */}
                <h1>{this.state.title}</h1>
                <h2>Class Component Export</h2>
                <h1>User = {this.state.user}</h1>
                <button onClick={() => this.changeValue()}>click to modify</button>
                <br></br>
                <br></br>
                <input onChange={(event) => this.changeListerner(event)}></input>
            </div>
        );
    }
}

export default ClassComponent;


