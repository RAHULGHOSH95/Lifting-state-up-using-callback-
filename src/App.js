import { useState } from 'react';
import './App.css';
import Child from './ChildComponent';

function App() {

  const[ChildValue,SetChildValue] = useState()
  const getChildData=(val) =>{
    console.log(val)
    SetChildValue(val)
  }

  return (
    <div className="App">
    <div className='div-parent'>
    <h1> This is Parent Component - {ChildValue} </h1>
    </div>
     <Child sendToParent={getChildData} />
    </div>
  );
}
export default App;