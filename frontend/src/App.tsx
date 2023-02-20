import React from 'react'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'

import { GlobalSpinner } from 'components/loading/components/GlobalSpinner '
import { RootLayout } from 'views/RootLayout'
import { Home } from 'views/Home'
import { TableRoutes } from './routes/TableRoutes'
import { NotFound } from 'views/NotFound'
import { DeviceTable } from 'views/tables/DeviceTable'
const LazyDevice = React.lazy(
  () => import('components/tables/components/device_table/MuiDeviceTable')
)
import { MuiDeviceTableLoader } from 'components/tables/components/device_table/MuiDeviceTableLoader'
import { useDevices } from 'services/data/components/DeviceService'

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="device"
          element={
            <React.Suspense fallback={<GlobalSpinner />}>
              <LazyDevice />
            </React.Suspense>
          }
          loader={MuiDeviceTableLoader}
        />
        {/*A nested route!*/}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}
