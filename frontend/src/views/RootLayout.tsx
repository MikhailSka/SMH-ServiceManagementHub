import { Outlet } from 'react-router-dom'

import { SMHNavBar } from 'components/nav_bar/components/NavBar'
import { Background } from 'components/layout/components/Background'

export function RootLayout() {
  return (
    <>
      <Background />
      <SMHNavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
