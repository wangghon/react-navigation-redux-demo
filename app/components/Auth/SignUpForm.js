import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

// notice how this.props.navigation just works, no mapStateToProps
// some wizards made this, not me
class SignUp extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  _onPress = () => this.props.navigation.goBack(null);

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Signup</Text>
        <TouchableOpacity onPress={this._onPress}>
          <Text>Go to Login View</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUp;
