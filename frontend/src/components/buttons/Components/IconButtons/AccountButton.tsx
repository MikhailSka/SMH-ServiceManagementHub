import IconButton from '@mui/material/IconButton'
import { Avatar } from '@mui/material'
import { Tooltip } from '@mui/material'

import { IButtonProps } from '../../Models/IButtonProps'
import { stringAvatar } from '../../../../hooks/stringAvatar'
import { useAppSelector } from 'store/hooks'
import { RootState } from 'store/store'

export const AccountButton: React.FC<IButtonProps> = ({ handleAction }) => {
  const { userData } = useAppSelector(
    (state: RootState) => state.user
  )
  
  if (!userData) {
    return null; 
  }

  const { email, image, name } = userData;

  return (
    <Tooltip title={`Account: ${email}`}>
       <IconButton onClick={handleAction}>
        <Avatar
          src={image!}
          {...stringAvatar(name)}
          style={{
            margin: '0px',
            width: '40px',
            height: '40px',
          }}
        />
      </IconButton>
    </Tooltip>
  )
}