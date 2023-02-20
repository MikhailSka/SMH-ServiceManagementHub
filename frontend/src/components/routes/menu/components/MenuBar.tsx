import { useContext } from 'react'
import Box from '@mui/material/Box'

import { MenuButton } from 'components/buttons/components/MenuButton'
import { TabOptions } from 'components/tab/components/TabOptions'
import { TabContext } from 'context/tab_context/components/TabContext'
import { MenuPages } from './MenuPages'

export function MenuBar() {
  const { openTab } = useContext(TabContext)
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <MenuButton handleAction={openTab} />
      <TabOptions pages={MenuPages} />
    </Box>
  )
}
