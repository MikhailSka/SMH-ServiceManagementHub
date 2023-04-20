export interface SnackbarShowAction {
    type: 'SNACKBAR_SHOW';
    payload: {
      message: string;
      type: 'error' | 'success';
    };
  }
  
  export interface SnackbarHideAction {
    type: 'SNACKBAR_HIDE';
  }
  
  export type SnackbarActionTypes = SnackbarShowAction | SnackbarHideAction;