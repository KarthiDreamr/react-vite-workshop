import { useState } from "react";

function FunctionComponent(props){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{props.title}</h1>
            <h2>Function Component Export</h2>
            <p>Count = {count}</p>
            <button onClick={()=>setCount(count+1)}>click here</button>
        </div>
    );
}

export default FunctionComponent;

