import { SnackbarShowAction } from "store/reducers/snackbarReduser/SnackbarActionTypes";

export const showSnackbar = (message: string, type: 'error' | 'success'): SnackbarShowAction => ({
  type: 'SNACKBAR_SHOW',
  payload: {
    message,
    type,
  },
});