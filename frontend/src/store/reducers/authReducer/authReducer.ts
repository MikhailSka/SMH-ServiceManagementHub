import { AuthActionTypes } from "./AuthActionTypes";
import { AuthState } from './AuthState';
const initialState: AuthState = {
  isAuthenticated: false,
  userData: {
    email: '',
    role: '',
  },
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        userData: {
          email: '',
          role: '',
        },
      };

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
      
    default:
      return state;
  }
};

export default authReducer;