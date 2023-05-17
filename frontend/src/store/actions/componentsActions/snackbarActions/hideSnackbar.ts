import { SnackbarHideAction } from "store/reducers/componentsRedusers/snackbarReduser/SnackbarActionTypes";

export const hideSnackbar = (): SnackbarHideAction => ({
    type: 'SNACKBAR_HIDE',
  });