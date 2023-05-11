import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toggleSideNavBar } from 'store/actions/sideNavBarActions/toggleSideNavBar'

export const MainMenuItems: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <>
      <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
      <MenuItem onClick={() => navigate('/units')}>Units</MenuItem>
      <MenuItem onClick={() => dispatch(toggleSideNavBar())}>Tables</MenuItem>
    </>
  )
}
