import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useAppDispatch } from 'store/hooks';
import { useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';
import { hideSnackbar } from 'store/actions/snackbarActions/hideSnackbar';

export const AlertSnackbar: React.FC = () => {
    const { message, type, isOpen } = useAppSelector((state: RootState) => state.snackbar); // Get isOpen from the Redux state
    const dispatch = useAppDispatch();
  
    const handleClose = () => {
      dispatch(hideSnackbar());
    };
  
    return (
      <Snackbar
        open={isOpen} 
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={type!} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    );
  };
