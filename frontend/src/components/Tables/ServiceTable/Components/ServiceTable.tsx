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
import { getServices } from 'store/actions/serviceAvctions/getServices'
import { useStyles } from '../../../../useStyles'
import { useServiceTableColumns } from '../Hooks/useServiceTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ServiceTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { services, isLoading } = useAppSelector(
    (state: RootState) => state.service
  )
  const { unitHistories } = useAppSelector(
    (state: RootState) => state.unitHistory
  )
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            border: 'none',  // Remove border
            boxShadow: 'none',  // Remove shadow
          },
        },
      },
    },
  });
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
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    renderExpandableRow: (
      rowData: any[],
      rowMeta: { dataIndex: number; rowIndex: number }
    ) => {
      const service = services[rowMeta.dataIndex]

      const unitHistoryData = unitHistories.filter(
        (unitHistory) => unitHistory.unit_id === service.id
      )

      const colSpan = rowData.length + 1
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <ThemeProvider theme={theme}>
              <MUIDataTable
                title={'Unit History'}
                data={unitHistoryData}
                columns={[
                  'unit_name',
                  'location_name',
                  'user_name',
                  'creation_date',
                ]}
                options={{
                  selectableRows: 'none' as const,
                  download: false,
                  print: false,
                  viewColumns: false,
                  filter: false,
                }}
              />
            </ThemeProvider>
          </TableCell>
        </TableRow>
      )
    },
  }

  return (
    <Box className={classes.box}>
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
