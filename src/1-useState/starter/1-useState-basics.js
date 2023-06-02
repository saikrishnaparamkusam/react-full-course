import React, {useState} from "react";

const Index = () => {

 const [count, setCount] = useState(0); 
 const incrementCount = () => {
  setCount((e) => {
    return e + 1;
  });
  setCount(prevCount => prevCount + 1);
 }
 const decrementCount = () => {
  setCount(count - 1);
 }

  return (
    <div>
      <button style={{color:"Red",fontWeight:"bold", padding:"10px", margin:"5px"}} onClick={decrementCount}>-</button>
      <span>Count : {count} </span>
      <button style={{color:"green",fontWeight:"bold", padding:"10px", margin:"5px"}} onClick={incrementCount}>+</button>
    </div>
  )
}

export default Index;
