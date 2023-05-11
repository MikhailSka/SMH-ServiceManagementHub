import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

import { StyledNavBar } from '../Styles/StyledNavBar'
import { LogoNarrow } from 'components/IconsAndAnimations/LogoNarrow'
import { LogoWide } from 'components/IconsAndAnimations/LogoWide'
import { MenuBar } from '../../Menu/Components/Menu/MenuBar'
import { MenuOptionButtons } from '../../Menu/Components/Menu/MenuOptionButtons'
import { AccountBar } from '../../Menu/Components/Account/AccountBar'
import { MenuProvider } from '../../Menu/Context/MenuProvider'

export const SMHNavBar: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <StyledNavBar open={open} position="fixed" style={{ background: '#292929' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuProvider>
            <MenuBar />
          </MenuProvider>
          <LogoNarrow />
          <LogoWide />
          <MenuProvider>
            <MenuOptionButtons />
            <AccountBar />
          </MenuProvider>
        </Toolbar>
      </Container>
    </StyledNavBar>
  )
}