import { useState, useReducer } from "react";
import "./App.css";
import { ACTION_TYPE , reducer } from './functions/changeCount'

function App() {
  // dispatch => reducer 에게 일을 시키는 함수
  const [rCount, dispatch] = useReducer(reducer, 0);
  const up = () => {
    dispatch({ type: ACTION_TYPE.up , payload: 1 });
  }
  const down = () => {
    dispatch({ type: ACTION_TYPE.down , payload: 1 });
  }
  return (
    <>
      <h1>New Counter using Reducer</h1>
      <p>{rCount}</p>
      <button
        onClick={up}
      >
        1 증가
      </button>
      <button
        onClick={down}
      >
        1 감소
      </button>
    </>
  );
}

export default App;
