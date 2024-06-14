import React from 'react'
import { useState, useCallback } from 'react';
import ChildA from './ChildA';
// import "./App.css";

function Main() {
    const [add, setAdd] = useState(0);
    const [count, setCount]= useState(0);
    const abc= useCallback(()=> {
      //some operations
    },[])
    
    return (
      <div className="App">
        <h1> Learning useCallback</h1>
        <ChildA Learning={abc}/>
        <h1> {add}</h1>
        <button onClick={() => setAdd(add + 1)}> Ravika</button>
        <h1> {count}</h1>
        <button onClick={()=> setCount(count+1)}> Count</button>
      </div>
    );
}

export default Main;