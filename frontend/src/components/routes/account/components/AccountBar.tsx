import { useContext } from 'react'
import Box from '@mui/material/Box'

import { AccountButton } from 'components/buttons/components/AccountButton'
import { TabOptions } from 'components/tab/components/TabOptions'
import { TabContext } from 'context/tab_context/components/TabContext'
import { AccountPages } from './AccountPages'

export function AccountBar() {
  const { openTab } = useContext(TabContext)
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AccountButton handleAction={openTab} />
      <TabOptions pages={AccountPages} />
    </Box>
  )
}
