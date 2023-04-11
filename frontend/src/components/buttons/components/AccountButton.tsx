import IconButton from '@mui/material/IconButton'
import { Avatar } from '@mui/material'
import { Tooltip } from '@mui/material'

import { IButtonProps } from '../Models/IButtonProps'
import { useAppSelector } from 'store/hooks'
import { RootState } from 'store/store'

export const AccountButton: React.FC<IButtonProps> = ({ handleAction, src }) => {
  const { userData } = useAppSelector(
    (state: RootState) => state.auth
  )
  return (
    <Tooltip title={`Account: ${userData.email}`}>
       <IconButton onClick={handleAction}>
        <Avatar
          src={src}
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
