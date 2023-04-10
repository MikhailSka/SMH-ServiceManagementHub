import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { MUIDataTableBody } from 'mui-datatables'
import { Box } from '@mui/material'

import { useTableStyle } from '../../Styles/TableStyle'
import { useAppDispatch } from 'store/hooks'
import { useAppSelector } from 'store/hooks'
import { getDevices } from 'store/actions/deviceActions/getDevices'
import { RootState } from '../../../../store/store'
import { useDeviceTableColumns } from '../hooks/useDeviceTableColumns'
import LoadingTableBody from '../../Common/LoadingTableBody'
import DeviceTableToolbar from './DeviceTableToolbar'


const DeviceTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { devices, isLoading } = useAppSelector(
    (state: RootState) => state.device
  )

  useEffect(() => {
    dispatch(getDevices())
  }, [dispatch])

  const columns = useDeviceTableColumns(devices);

  const classes = useTableStyle()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  return (
    <Box className={classes.table}>
      <MUIDataTable
        title={'Devices'}
        data={devices}
        columns={columns}
        options={{
          
          selectableRows: 'none' as const,
          rowsPerPageOptions: [10, 25, 50],
          customToolbar: () => <DeviceTableToolbar />
        }}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  )
}

export default DeviceTable
