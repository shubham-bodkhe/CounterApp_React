import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="Heading">COUNTER</div>

      <div className="number">{count}</div>

      <div className="buttons">
        <button className="btn dec"  onClick={()=>{setCount(count -1)}}>Decrement</button>
        <button className="btn rst " onClick={()=>{setCount(0)}}>Reset</button>
        <button className="btn inc" onClick={()=>{setCount(count +1)}}>Increment</button>
      </div>
    </>
  );
};

export default Counter;
