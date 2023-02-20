import Dialog from '@mui/material/Dialog';
import Sheet from '@mui/joy/Sheet';

import { Transition } from './Transition';
import { IModalProps } from '../models/IModalProps';
import { BootstrapDialogTitle } from './BootstrapDialogTitle';

export function OpenModal(props: IModalProps) {

  return (
    <Dialog
      open={props.show}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <Sheet
        variant="plain"
        sx={{
          maxWidth: 1000,
          minWidth: 400,
          background: 'tra',
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
          bgcolor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.onClose}>
          {props.decorator}
          {props.title}
        </BootstrapDialogTitle>
        {props.children}
      </Sheet>
    </Dialog>
  );
}