import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(15);
  function handleclick() {
    if (count === 20) {
      console.log("limit ends");
      return
      
      
    }
    setCount(count + 1);
  }
  const decCount = () =>{
    if (count === 0) {
      console.log("limit ends");
      return
      
      
    }
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div className="h5">
        <h2>Product {count}</h2>
        <h2>Cart {count}</h2>
        <h2>Order {count}</h2>
      </div>
      <button className="btn" onClick={handleclick}>
        Add Count
      </button>
      <br />
      <button className="btn" onClick={decCount}>
        Decrease Count
      </button>
    </div>
  );
}
export default App;
