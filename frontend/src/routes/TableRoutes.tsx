import { Routes, Route } from 'react-router-dom'

import { MuiDeviceTable } from 'components/tables/components/device_table/MuiDeviceTable'
import { NotFound } from 'views/NotFound'

export function TableRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<>tables</>} />
        <Route path="device" loader={() =><MuiDeviceTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
