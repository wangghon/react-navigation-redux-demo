import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { onLogout } from 'components/Auth/login_actions';

@connect(
  () => ({}),
  { onLogout },
)
class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
  };

  _onPress = () => {
    const { onLogout, navigation } = this.props;
    onLogout(navigation);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>We logged in already</Text>
        <TouchableOpacity onPress={this._onPress}>
          <Text>Log out to Reset the navigation stack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;
