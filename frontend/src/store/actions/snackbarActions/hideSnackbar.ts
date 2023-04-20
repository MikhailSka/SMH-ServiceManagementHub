import { SnackbarHideAction } from "store/reducers/snackbarReduser/SnackbarActionTypes";

export const hideSnackbar = (): SnackbarHideAction => ({
    type: 'SNACKBAR_HIDE',
  });