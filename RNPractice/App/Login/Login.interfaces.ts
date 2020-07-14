import { mapStateToProps, mapDispatchToProps } from './Login.container';

export { mapStateToProps } from './Login.container';

export interface ILoginProps {
    counter: number
};
export interface ILoginState {}

type IStore = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;


export type Props = ILoginProps & IStore & IDispatch;
export type State = ILoginState;
