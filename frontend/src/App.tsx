import React from 'react'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'

import LoadingSpinner from 'components/IconsAndAnimations/LoadingSpinner/LoadingSpinner'
import { RootLayout } from './routes/hub/RootLayout'
import { Home } from 'views/Home'
import { TableRoutes } from './routes/TableRoutes'
import NotFoundPage from 'views/NotFound'
const LazyDevice = React.lazy(
  () => import('components/Tables/DeviceTable')
)

// import DeviceTable from 'components/Tables/DeviceTable/DeviceTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route
            path="device"
            element={
              <DialogProvider>
                <React.Suspense fallback={<LoadingSpinner/>}>
                  <LazyDevice />
                </React.Suspense>
              </DialogProvider>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
