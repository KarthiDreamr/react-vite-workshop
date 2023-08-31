import './App.css'
import FunctionComponent from './Components/FunctionComponent'
import ClassComponent from './Components/ClassComponent'

function buttonClick(){
  console.log("sam")
}


function App() {

  return (
    <>
      <FunctionComponent title="Function Component"/>
      <ClassComponent title="Non-Class Component"/>
      <br>
      </br>
      <button on onClick={()=>buttonClick()}>click here</button>
    </>
  )
}

export default App
