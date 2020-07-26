import actionCreatorFactory from 'typescript-fsa';
import { ICounterIncrementPayload, ICounterDecrementPayload } from './types';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterActionCreator = actionCreatorFactory('@@counter');

export const counterIncrement = counterActionCreator<ICounterIncrementPayload>(INCREMENT);
export const counterDecrement = counterActionCreator<ICounterDecrementPayload>(DECREMENT);
