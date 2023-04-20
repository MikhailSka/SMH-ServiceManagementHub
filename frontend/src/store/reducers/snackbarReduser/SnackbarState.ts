export interface SnackbarState {
  message: string | null;
  type: 'error' | 'success' | null;
  isOpen: boolean; 
}