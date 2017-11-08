import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { login } from './login_actions';

@connect(
  state => ({
    authenticated: state.auth.isAuthenticated,
  }),
  { login },
)
class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { authenticated } = this.props;
    const { authenticated: nextAuth } = nextProps;
    if (nextAuth && !authenticated) this.props.navigation.navigate('Dashboard');
  }

  _onSignup = (navigation) => navigation.navigate('Signup');
  _onLogin = () => this.props.login();
  _onForgetPwd = () => {};
  _onClearStorage = () => AsyncStorage.clear();

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={this._onLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onSignup}>
          <Text>Go back to Sign up View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onForgetPwd}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onClearStorage}>
          <Text>Clear All Storage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



export default SignIn;
