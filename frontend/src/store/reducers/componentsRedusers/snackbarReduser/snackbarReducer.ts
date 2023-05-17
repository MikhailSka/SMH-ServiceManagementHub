import { SnackbarActionTypes } from './SnackbarActionTypes';
import { SnackbarState } from './SnackbarState';

const initialState: SnackbarState = {
  message: null,
  type: null,
  isOpen: false,
};

const snackbarReducer = (
  state = initialState,
  action: SnackbarActionTypes
): SnackbarState => {
  switch (action.type) {
    case 'SNACKBAR_SHOW':
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        isOpen: true, 
      };
    case 'SNACKBAR_HIDE':
      return {
        ...state,
        isOpen: false, 
      };
    default:
      return state;
  }
};

export default snackbarReducer;