import React, { useState, useEffect, useReducer } from "react";



const Hooks = () => {
  const [Val, setVal] = useState(0);
  const reducerMethod = (ValState, Action) => {
    if (Action.type === "Incrementer") {
      ValState = ValState + 1;
    }
    if (ValState>0 && Action.type === "Decrementer") {
      ValState = ValState - 1;
    }
    return ValState;
  };

  useEffect(() => {
    document.title = `count is ${ValState}`;
    console.log('hi')
  });

  const initial = 10
  const [ValState, dispatch] = useReducer(reducerMethod, 0);

  const incrementHandler = () => {
    // setVal(Val + 1);
    dispatch({ type: "Incrementer" });
  };
  const decrementHandler = () => {
    // Val > 0 ? setVal(Val - 1) : setVal(0);
    dispatch({ type: "Decrementer" });
  };
  return (
    <div>
      <span>{ValState}</span>
      {/* <button onClick={incrementHandler}>Increament</button>
      <button onClick={decrementHandler}>Decrement</button> */}
      <input type='text'></input>
      <button onClick={incrementHandler}>Increament reducer</button>
      <button onClick={decrementHandler}>Decrement reducer</button>
    </div>
  );
};

export default Hooks;
