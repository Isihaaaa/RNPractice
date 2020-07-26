import { Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import App from '../App';
import { connect } from 'react-redux';
import { Props, State } from './Application.interface';
import { mapStateToProps, mapDispatchToProps } from './Application.container';

class Application extends React.Component<Props, State> {
  public state: State = {
    counter: 0,
  };
  public render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            this.props.counterIncrementAsync(this.state.counter), console.log('increment' + this.props.counter);
          }}>
          <Text style={{ fontSize: 20 }}>increment</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>{this.props.counter}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.counterDecrementAsync(this.state.counter), console.log('increment' + this.props.counter);
          }}>
          <Text style={{ fontSize: 20 }}>decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
