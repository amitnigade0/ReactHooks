import React, { useReducer, useState } from "react";

function UseReducerExample(props) {
  const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };``

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleInc = () => {
    dispatch("inc");
  };

  const handleDec = () => {
    dispatch("dec");
  };

  return (
    <div>
      <button onClick={handleInc}>Inc</button>
      <span>{state.count}</span>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
}

export default UseReducerExample;
