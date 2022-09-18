import React , {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = React.useState(0);
  return (
    <div data-test = "component-app">
      <h1 data-test = "counter-dispaly"> The counter is currently </h1>
      <span data-test ="count">{count}</span>
      <button data-test ="increment-counter">Increment Counter</button>
    </div>
   
  );
}

export default App;
