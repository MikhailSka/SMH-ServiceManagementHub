import { UserActionTypes } from "./UserActionTypes";
import { UserState } from './UserState';

const initialState: UserState = {
  isAuthenticated: false,
  userData: {
    id: '',
    email: '',
    admin: false,
    name: '',
    image: '',
    active: false,
  },
  users: [],
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
          name: '',
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

    case 'REMOVE_IMAGE_SUCCESS':
      return {
        ...state,
        userData: {
          ...state.userData,
          image: null,
        },
      };

    case 'UPDATE_USER_NAME_SUCCESS':
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.payload.name,
        },
      };

    case 'UPDATE_USER_EMAIL_SUCCESS':
      return {
        ...state,
        userData: {
          ...state.userData,
          email: action.payload.email,
        },
      };

      case 'ADD_USER': {
        const index = state.users ? state.users.findIndex((user) => user.id === action.payload.id) : -1;
      
        if (index > -1) {
          return {
            ...state,
            users: state.users.map((user, i) => (i === index ? action.payload : user)),
          };
        } else {
          return {
            ...state,
            users: [...(state.users ?? []), action.payload],
          };
        }
      }

    case 'LOAD_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;