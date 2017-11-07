
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './login_types.js';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: '',
  error: '',
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...INITIAL_STATE,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...INITIAL_STATE,
        error: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};
