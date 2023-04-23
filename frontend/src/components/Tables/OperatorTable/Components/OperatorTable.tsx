import React, { useMemo, useEffect } from 'react'
import MUIDataTable, { MUIDataTableBody }from 'mui-datatables'
import { Box } from '@mui/material'

import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getOperators } from 'store/actions/operatorActions/getOperators'
import { useOperatorTableColumns } from '../Hooks/useOperatorTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { OperatorTableToolbar } from './OperatorTableToolbar'
import { useStyles } from '../../../../useStyles'

const OperatorTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { operators, isLoading } = useAppSelector(
    (state: RootState) => state.operator
  )

  useEffect(() => {
    dispatch(getOperators())
  }, [dispatch])

  const columns = useOperatorTableColumns(operators)

  const classes = useStyles()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  return (
    <Box className={classes.box}>
      <MUIDataTable
        title={'Operators'}
        data={operators}
        columns={columns}
        options={{
          selectableRows: 'none' as const,
          rowsPerPageOptions: [10, 25, 50],
          customToolbar: () => <OperatorTableToolbar />,
        }}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  )
}
export default OperatorTable
