import { Outlet } from 'react-router-dom'

import { Background } from 'components/Background/Background'

export function BackgroundLayout() {
  return (
    <>
      <Background />
      <main>
        <Outlet />
      </main>
    </>
  )
}
