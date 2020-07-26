import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './App/store/reducer';
import Application from './App/Application';

const store = createStore(counterReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}
