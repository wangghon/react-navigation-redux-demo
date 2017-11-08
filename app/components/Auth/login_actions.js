import { AsyncStorage } from 'react-native';

import {
  INITIALIZE_APP,
  // CHECK_REMEMBER_ME,
  // TOGGLE_REMEMBER_ME,
  // LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './login_types';

//INITIALIZE APP
// this isn't done, no try/catch and LOGIN_FAIL isn't hooked up
// but you get the idea
// if a valid JWT is detected, they will be navigated to WeLoggedIn
export const initializeApp = () => {
  return async (dispatch) => {
    dispatch({ type: INITIALIZE_APP });

    const user = await AsyncStorage.getItem('token')
      .catch((error) => dispatch({ type: LOGIN_FAIL, payload: error }));

    if (!user) return dispatch({ type: LOGIN_FAIL, payload: 'No Token' });

    return dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    // navigation.navigate('WeLoggedIn')
    // pass navigation into this function if you want
  };
};

//LOGIN
export const login = () => {
  const token = '123456';
  AsyncStorage.setItem('token', token);
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

//LOGOUT
export const onLogout = (navigation) => {
  return async (dispatch) => {
    try {
      AsyncStorage.removeItem('token');

      navigation.dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [{ type: 'Navigate', routeName: 'Login' }],
      });

      return dispatch({ type: LOGOUT });
    } catch (errors) {
      // pass the user through with no error
      // this restores INITIAL_STATE (see login_reducer.js)
      return dispatch({ type: LOGOUT });
    }
  };
};
