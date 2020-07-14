import React from 'react';
import { Props, State, mapStateToProps } from './Login.interfaces';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './Login.container';
class Login extends React.Component<Props, State> {

  increaseCounter = () =>{
    //  this.setState({counter: this.state.counter + 1})
  }

  decreaseCounter = () =>{
    //  this.setState({counter: this.state.counter - 1})
  }

  public render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center"}}>
        <TouchableOpacity onPress={this.props.increaseCounter}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={this.props.decreaseCounter}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
