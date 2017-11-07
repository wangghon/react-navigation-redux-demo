import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static propTypes = {
      authenticated: PropTypes.bool.isRequired,
      navigation: PropTypes.object.isrequired,
    }
    componentWillMount() {
      if (!this.props.authenticated) this.props.navigation.navigate('Login');
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.authenticated) this.props.navigation.navigate('Login');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    return {
      authenticated: auth.isAuthenticated,
    };
  };

  return connect(mapStateToProps)(Authentication);
}
