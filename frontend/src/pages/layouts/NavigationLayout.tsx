import { Outlet } from 'react-router-dom'

import { SMHNavBar } from 'components/Navigation/NavigationBar/NavBar'

export function NavigationLayout() {
  return (
    <>
      <SMHNavBar />
      <Outlet />
    </>
  )
}
