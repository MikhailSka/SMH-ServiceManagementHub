import React, { useMemo, useEffect } from 'react'
import MUIDataTable, { MUIDataTableBody }from 'mui-datatables'
import { Box } from '@mui/material'

import { useStyles } from '../../../../useStyles'
import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getCustomers } from 'store/actions/customerActions/getCustomers'
import { useCustomerTableColumns } from '../Hooks/useCustomerTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { CustomerTableToolbar } from './CustomerTableToolbar'

const CustomerTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { customers, isLoading } = useAppSelector(
    (state: RootState) => state.customer
  )

  useEffect(() => {
    dispatch(getCustomers())
  }, [dispatch])

  const columns = useCustomerTableColumns(customers)

  const classes = useStyles()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  return (
    <Box className={classes.box}>
      <MUIDataTable
        title={'Customers'}
        data={customers}
        columns={columns}
        options={{
          selectableRows: 'none' as const,
          rowsPerPageOptions: [10, 25, 50],
          customToolbar: () => <CustomerTableToolbar />,
        }}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  )
}

export default CustomerTable
