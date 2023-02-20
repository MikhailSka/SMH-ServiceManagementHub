import { useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import { TabContext } from 'context/tab_context/components/TabContext'
import { MenuPages } from './MenuPages'

export function MenuOptionButtons() {
  const { closeTab } = useContext(TabContext)
  const navigate = useNavigate()

  const routeChange = (link: string) => {
    closeTab()
    navigate(link)
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {MenuPages.map((page) => (
        <Button
          key={page.name}
          onClick={() => {
            routeChange(page.link)
          }}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  )
}
