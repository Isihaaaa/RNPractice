import React from 'react';
import Login from './App/Login/Login';
import {Provider} from 'react-redux';
import CreateStore, {createStore} from 'redux';

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Login counter={store.getState().counter} />
    </Provider>
  );
};

export default App;
