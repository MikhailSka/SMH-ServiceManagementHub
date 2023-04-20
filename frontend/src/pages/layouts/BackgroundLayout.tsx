import { Outlet } from 'react-router-dom'

import { AlertSnackbar } from 'components/Alerts/AlertSnackbar'
import { Background } from 'components/Background/Background'

export function BackgroundLayout() {
  return (
    <>
      <Background />
      <main>
        <Outlet />
      </main>
      <AlertSnackbar />
    </>
  )
}
