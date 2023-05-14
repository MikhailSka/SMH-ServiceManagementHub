import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import Person from '@mui/icons-material/Person'
import { IService } from 'models/IService'

export interface CustomIconProps {
  service: IService
}

export const CustomerIcon: React.FC<CustomIconProps> = ({ service }) => {
  const { customer_name, nip } = service

  return (
    <Tooltip
      title={
        <React.Fragment>
          <Typography>Nip: {nip}</Typography>
          <Typography>Name: {customer_name}</Typography>
        </React.Fragment>
      }
    >
      <IconButton>
        <Person />
      </IconButton>
    </Tooltip>
  )
}
