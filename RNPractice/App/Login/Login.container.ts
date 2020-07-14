export function mapStateToProps(state){
    return{
      conter: state.counter
  }
}

export function mapDispatchToProps(dispatch){
    return{
        increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'}),
    }
}