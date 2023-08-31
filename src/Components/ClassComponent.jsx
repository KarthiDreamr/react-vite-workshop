import React,{Component} from "react";

class ClassComponent extends Component{

    constructor(props)
    {
        this.props={
            title:"Class Component"
        }

    }

    render(){
        // this.props={"title":"Class Component"}
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>Class Component Export</h2>
            </div>
        );
    }
}

export default ClassComponent;