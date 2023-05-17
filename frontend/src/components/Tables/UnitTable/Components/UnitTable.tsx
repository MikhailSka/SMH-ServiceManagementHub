import React, { useMemo, useEffect } from 'react'
import MUIDataTable, { MUIDataTableBody }from 'mui-datatables'
import { Box } from '@mui/material'

import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getUnits } from 'store/actions/tableActions/unitActions/getUnits'
import { useUnitTableColumns } from '../Hooks/useUnitTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { UnitTableToolbar } from './UnitTableToolbar'
import { useStyles } from '../../../../useStyles'

const UnitTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { units, isLoading } = useAppSelector(
    (state: RootState) => state.unit
  )

  useEffect(() => {
    dispatch(getUnits())
  }, [dispatch])

  const columns = useUnitTableColumns(units);

  const classes = useStyles()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  return (
    <Box className={classes.xlBox}>
      <MUIDataTable
        title={'Units'}
        data={units}
        columns={columns}
        options={{
          
          selectableRows: 'none' as const,
          rowsPerPageOptions: [10, 25, 50],
          customToolbar: () => <UnitTableToolbar />
        }}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  )
}

export default UnitTable