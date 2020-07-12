import React from 'react';
import {Props, State} from './Login.interfaces';
import {Text, View} from 'react-native';

class Login extends React.Component<Props, State> {
  public render() {
    return (
      <View>
        <Text>Login Page</Text>
      </View>
    );
  }
}

export default Login;
