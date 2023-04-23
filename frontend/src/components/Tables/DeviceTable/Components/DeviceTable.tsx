import React, { useMemo, useEffect } from 'react'
import MUIDataTable, { MUIDataTableBody }from 'mui-datatables'
import { Box } from '@mui/material'

import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getDevices } from 'store/actions/deviceActions/getDevices'
import { useDeviceTableColumns } from '../Hooks/useDeviceTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { DeviceTableToolbar } from './DeviceTableToolbar'
import { useStyles } from '../../../../useStyles'

const DeviceTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { devices, isLoading } = useAppSelector(
    (state: RootState) => state.device
  )

  useEffect(() => {
    dispatch(getDevices())
  }, [dispatch])

  const columns = useDeviceTableColumns(devices);

  const classes = useStyles()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  return (
    <Box className={classes.box}>
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
