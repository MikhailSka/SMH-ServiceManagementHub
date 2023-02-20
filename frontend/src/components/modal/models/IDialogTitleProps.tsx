export interface IDialogTitleProps {
    id: string;
    children?: React.ReactNode;
    decorator?: React.ReactNode;
    onClose: () => void;
  }