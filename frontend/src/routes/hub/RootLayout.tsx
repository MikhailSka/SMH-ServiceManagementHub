import { Outlet } from 'react-router-dom'

import { SMHNavBar } from 'components/Navigation/NavigationBar/NavBar'
import { Background } from 'components/Background/Background'

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
