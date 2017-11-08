import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { onLogout } from 'components/Auth/login_actions';

// notice how we pass navigation in
const Dashboard = ({ navigation }) => {
  const onPress = () => onLogout(navigation);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>We logged in already</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Log out to Reset the navigation stack</Text>
      </TouchableOpacity>
    </View>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Dashboard;
