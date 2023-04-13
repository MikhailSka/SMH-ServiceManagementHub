import { UserActionTypes } from "./UserActionTypes";
import { UserState } from './UserState';
const initialState: UserState = {
  isAuthenticated: false,
  userData: {
    id: '',
    email: '',
    admin: false,
    image: '',
    active: false,
  },
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
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
          id: '',
          email: '',
          admin: false,
          image: '',
          active: false,
        },
      };

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
      case 'UPLOAD_IMAGE_SUCCESS':
  return {
    ...state,
    userData: {
      ...state.userData,
      image: action.payload,
    },
  };
    default:
      return state;
  }
};

export default userReducer;