import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
// https://github.com/oblador/react-native-animatable
// this is a library you REALLY should be using
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { initializeApp } from './login_actions';

// my LOGIN_SUCCESS action creator flips state.auth.isAuthenticated to true
// so this splash screen just watches it
@connect(
  state => ({
    authenticated: state.auth.isAuthenticated,
    error: state.auth.error,
  }),
  { initializeApp },
)
class Splash extends Component {
  static propTypes = {
    initializeApp: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    setTimeout(() => this.props.initializeApp(), 2000);
  }

  componentWillReceiveProps(nextProps) {
    const { authenticated, error } = nextProps;
    if (!authenticated && error === 'No Token') this.props.navigation.navigate('Login');
    if (authenticated) this.props.navigation.navigate('WeLoggedIn');
  }

  render() {
    const { container, text } = styles;
    return (
      <View style={container}>
        <Animatable.Text style={text} duration={1500} animation="rubberBand" easing="linear" iterationCount="infinite">Loading...</Animatable.Text>
        <Text>{(this.props.authenticated) ? 'LOGGED IN' : 'NOT LOGGED IN'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  image: {
    height: 110,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 50,
    fontSize: 15,
    color: '#1A1A1A',
  },
});

export default Splash;
