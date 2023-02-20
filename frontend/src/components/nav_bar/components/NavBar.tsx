import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import { LogoNarrow } from 'components/icons/components/Logo'
import { LogoWide } from 'components/icons/components/Logo'
import { MenuBar } from 'components/routes/menu/components/MenuBar'
import { TabState } from 'context/tab_context/components/TabState'
import { MenuOptionButtons } from 'components/routes/menu/components/MenuOptionButtons'
import { AccountBar } from 'components/routes/account/components/AccountBar'


export function SMHNavBar() {


  return (
    <AppBar position="static" style={{ background: '#292929' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TabState>
            <LogoNarrow />
            <MenuBar />
            <LogoWide />
            <MenuOptionButtons />
          </TabState>
          <TabState>
            <AccountBar/>
          </TabState>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
