import React , {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = React.useState(0);
  const [err,setErr] = useState(false)
  return (
    <div data-test = "component-app">
      <h1 data-test = "counter-dispaly"> The counter is currently </h1>
      <h2 data-test="err-message" className={ !err ? "hidden":"" }>Count can not be less than 0</h2>
      <span data-test ="count">{count}</span>
      <button data-test ="increment-counter" onClick={() => {
        if(err){
          setErr(false);
        }
        setCount(count+1)
      }}>Increment Counter</button>
      <button data-test ="decrement-counter" onClick={() => {
        if(count > 0){
          setCount(count-1)
        }else{
          setErr(true)
        }
        }}>Increment Counter</button>
    </div>
   
  );
}

export default App;
