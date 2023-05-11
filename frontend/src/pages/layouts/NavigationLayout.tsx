import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, CssBaseline } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import { Main } from './Main'
import { StyledSideNavBarHeader } from 'components/Navigation/SideNavBar/Styles/StyledSideNavBarHeader'
import { SMHNavBar } from 'components/Navigation/NavigationBar/Componets/NavBar'
import { SideNavBar } from 'components/Navigation/SideNavBar/Componets/SideNavBar'
import { RootState } from 'store/store'

export function NavigationLayout() {

  const drawerOpen = useSelector(
    (state: RootState) => state.sideNavBar.drawerOpen
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SMHNavBar open={drawerOpen}/>
      <SideNavBar open={drawerOpen} />
      <Main open={drawerOpen}>
        <StyledSideNavBarHeader/>
        <Outlet />
      </Main>
    </Box>
  )
}
