import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { TabContext } from 'context/tab_context/components/TabContext'
import { IOption } from '../models/IOption'

export function TabOptions({ pages }: { pages: Array<IOption> }) {
  const { tab, closeTab } = useContext(TabContext)
  const navigate = useNavigate()

  const routeChange = (link: string) => {
    closeTab()
    navigate(link)
  }
  return (
    <Menu
      id="menu-appbar"
      anchorEl={tab}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(tab)}
      onClose={closeTab}
    >
      {pages.map((page) => (
        <MenuItem
          key={page.name}
          onClick={() => {
            routeChange(page.link)
          }}
        >
          <Typography textAlign="center">{page.name}</Typography>
        </MenuItem>
      ))}
    </Menu>
  )
}
