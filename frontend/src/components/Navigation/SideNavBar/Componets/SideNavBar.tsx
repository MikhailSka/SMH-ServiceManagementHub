import React from 'react'
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  Button
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'store/hooks'
import { sideNavBarWidth } from './sideNavBarWidth'
import { StyledSideNavBarHeader } from '../Styles/StyledSideNavBarHeader'
import { toggleSideNavBar } from 'store/actions/componentsActions/sideNavBarActions/toggleSideNavBar'
import { sideNavBarOptions } from './sideNavBarOptions'

interface SideNavBarProps {
  open: boolean
}

export const SideNavBar: React.FC<SideNavBarProps> = ({ open }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <Drawer
      sx={{
        width: sideNavBarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sideNavBarWidth,
          boxSizing: 'border-box',
          background: '#292929',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <StyledSideNavBarHeader>
        <IconButton style={{ color: 'white' }} onClick={() => dispatch(toggleSideNavBar())}>
          <ChevronLeftIcon />
        </IconButton>
      </StyledSideNavBarHeader>
      <Divider />
      <List >
        {sideNavBarOptions.map((option) => (
          <ListItem key={option.text} disablePadding>
            <Button variant='outlined' style={{ borderColor: 'white', color: 'white', width: '140px', margin:'5px' }} onClick={() => navigate(option.link)}>
              {option.text}
            </Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
