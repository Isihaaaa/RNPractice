import { Action } from 'typescript-fsa';
import { ThunkDispatch } from 'redux-thunk';
import { ICounterStoreState, ICounterIncrementPayload, ICounterDecrementPayload } from './store/types';
import { counterIncrement, counterDecrement } from './store/action';

type CounterIncrementAction = Action<ICounterIncrementPayload>;
type CounterDecrementAction = Action<ICounterDecrementPayload>;

export function mapStateToProps(state: ICounterStoreState) {
  return {
    counter: state.counter,
  };
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<ICounterStoreState, undefined, CounterIncrementAction | CounterDecrementAction>) => ({
  counterIncrementAsync: (counter: number) => dispatch(counterIncrement({ counter: counter })),
  counterDecrementAsync: (counter: number) => dispatch(counterDecrement({ counter: counter })),
});
