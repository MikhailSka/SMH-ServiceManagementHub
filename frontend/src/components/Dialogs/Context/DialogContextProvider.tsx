import { useState, ReactNode } from 'react';

import DialogWindow from '../Components/DialogWindow';
import { DialogContext } from './DialogContext';

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [dialogContent, setDialogContent] = useState<ReactNode>(null);
  const [dialogTitle, setDialogTitle] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (content: ReactNode, title: string) => {
    setDialogContent(content);
    setDialogTitle(title);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const contextValue = {
    openDialog,
    closeDialog,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <DialogWindow
        isOpen={isDialogOpen}
        title={dialogTitle}
        onClose={closeDialog}
      >
        {dialogContent}
      </DialogWindow>
    </DialogContext.Provider>
  );
};