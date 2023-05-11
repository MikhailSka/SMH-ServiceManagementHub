import { Button } from '@mui/material'

import { IButtonProps } from '../../Models/IButtonProps'

export const NewPostButton: React.FC<IButtonProps> = ({
  handleAction,
}) => {
  return (
    <Button variant="contained" onClick={handleAction}>
      New Post
    </Button>
  )
}
