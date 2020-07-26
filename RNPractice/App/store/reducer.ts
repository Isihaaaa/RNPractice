import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ICounterStoreState } from './types';
import { counterIncrement, counterDecrement } from './action';

const initialState: ICounterStoreState = {
  counter: 0,
};

export const counterReducer = reducerWithInitialState(initialState)
  .case(counterIncrement, (state, payload) => {
    return { ...state, counter: state.counter + 1 };
  })
  .case(counterDecrement, (state, payload) => {
    return { ...state, counter: state.counter - 1 };
  });
