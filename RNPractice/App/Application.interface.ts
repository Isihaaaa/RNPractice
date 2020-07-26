import { mapStateToProps, mapDispatchToProps } from './Application.container';

export interface IApplicationProps {}

export interface IApplicationState {
  counter: number;
}

type IStore = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;

export type Props = IApplicationProps & IStore & IDispatch;
export type State = IApplicationState;
