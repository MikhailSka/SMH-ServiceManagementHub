export interface IButtonProps {
  handleAction?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'submit' | 'button' | 'reset';
  style?: object;
  src?: string;
}