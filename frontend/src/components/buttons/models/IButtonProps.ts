export interface IButtonProps {
  handleAction?: (e: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  type?: 'submit' | 'button' | 'reset';
  style?: object;
  src?: string;
  disabled?:boolean;
  component?: React.ElementType;
}