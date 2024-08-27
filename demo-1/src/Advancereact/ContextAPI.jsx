import React, { useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';

const initialState = { count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const CountContext = React.createContext();

return (
    <div>
        <h1>Context API with useReducer</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatchEvent({ type: 'increment' })}>+</button>
        <button onClick={() => dispatchEvent({ type: 'decrement' })}>-</button>
    </div>
);

function ContextAPI() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
        <Counter />
    </CountContext.Provider>
  );
}

export default ContextAPI
