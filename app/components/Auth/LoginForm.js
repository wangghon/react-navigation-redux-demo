import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

// notice how we pass navigation in
const SignIn = ({ navigation }) => {
  const onPress = () => navigation.goBack(null);
  return (
    <View>
      <Text>Log in</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Go back to Sign up View</Text>
      </TouchableOpacity>
    </View>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.object.isrequired,
};

export default SignIn;
