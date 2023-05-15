import React, { useMemo, useEffect } from 'react'
import MUIDataTable, { MUIDataTableBody } from 'mui-datatables'

import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getUnitHistories } from 'store/actions/unitHistoryActions/getUnitHistories'
import { useUnitHistoryTable } from '../Hooks/useUnitHistoryTable'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface IUnitHistoryTable {
  id: string,
  unitName: string
}
const UnitHistoryTable: React.FC<IUnitHistoryTable> = ({ id, unitName }) => {
  const dispatch = useAppDispatch()
  const { unitHistories, isLoading } = useAppSelector(
    (state: RootState) => state.unitHistory
  )

  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            border: 'none',
            boxShadow: 'none',
          },
        },
      }
    },
  })

  useEffect(() => {
    dispatch(getUnitHistories(id))
  }, [dispatch])

  const columns = useUnitHistoryTable()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={isLoading} {...props} />,
    [isLoading]
  )

  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        title={unitName}
        data={unitHistories}
        columns={columns}
        options={{
          selectableRows: 'none' as const,
          download: false,
          print: false,
          viewColumns: false,
          filter: false, 
          search: true, 
          rowsPerPageOptions: [10, 25, 50],
        }}
        components={{ TableBody: BodyComponent }}
      />
    </ThemeProvider>
  )
}
export default UnitHistoryTable
