import React, { useEffect, useMemo } from 'react'
import MUIDataTable, {
  MUIDataTableBody,
  MUIDataTableOptions,
} from 'mui-datatables'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { Box } from '@mui/material'

import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getServices } from 'store/actions/tableActions/serviceAvctions/getServices'
import { useStyles } from '../../../../useStyles'
import { useServiceTableColumns } from '../Hooks/useServiceTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import UnitHistoryTable from 'components/Tables/UnitHistoryTable'

const ServiceTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { services, isLoading } = useAppSelector(
    (state: RootState) => state.service
  )
  

  useEffect(() => {
    dispatch(getServices())
  }, [dispatch])


  const columns = useServiceTableColumns(services)
  const classes = useStyles()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  const options: MUIDataTableOptions = {
    filter: true,
    selectableRows: 'none',
    filterType: 'dropdown',
    responsive: 'standard',
    expandableRows: true,
    expandableRowsHeader: true,
    expandableRowsOnClick: false,
    renderExpandableRow: (
      rowData: any[],
      rowMeta: { dataIndex: number; rowIndex: number }
    ) => {
      const colSpan = rowData.length + 1
      return (
        <TableRow>
          <TableCell colSpan={colSpan} style={{ background: '#ededed' }}>
              <UnitHistoryTable id={services[rowMeta.dataIndex].id!} unitName={services[rowMeta.dataIndex].name!}/>
          </TableCell>
        </TableRow>
      )
    },
  }

  return (
    <Box className={classes.xlBox}>
      <MUIDataTable
        title={'Services'}
        data={services}
        columns={columns}
        options={options}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  )
}

export default ServiceTable