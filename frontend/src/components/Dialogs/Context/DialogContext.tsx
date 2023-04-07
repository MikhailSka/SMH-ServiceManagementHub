import { createContext, ReactNode } from 'react';

interface DialogContextValue {
  openDialog: (content: ReactNode, title: string) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextValue | undefined>(undefined);
