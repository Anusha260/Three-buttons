import React,{useState} from "react"
import './App.css';

function App() {
  const arr1=["Anu","shabhu","lucky"]
  const arr2=["Ammulu","shabheera","nicky"]
  const arr3=["Gudia","Deep","Varsha"]
  const[Button,setButton]=useState([]);
  
  return (
    <div className="App">
      <button onClick={()=>{
        setButton(arr1)
      }}>Button1
      
      </button>
      <button id="button2" onClick={()=>{
        setButton(arr2)
      }}>Button2</button>
      <button id="button3" onClick={()=>{
        setButton(arr3)
      }}>Button3</button>
      {
        Button.map((item,index)=>{
          return(
            <div>
              <h1 key="index">{item}</h1>
            </div>
          )
        })
      }
     
    </div>
  );
}

export default App;
