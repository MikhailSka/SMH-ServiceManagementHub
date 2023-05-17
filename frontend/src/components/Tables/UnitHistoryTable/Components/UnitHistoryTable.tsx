import React, { useMemo, useEffect, useState } from 'react'
import MUIDataTable, { MUIDataTableBody } from 'mui-datatables'

import { RootState } from '../../../../store/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getUnitHistories } from 'store/actions/tableActions/unitHistoryActions/getUnitHistories'
import { useUnitHistoryTable } from '../Hooks/useUnitHistoryTable'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface IUnitHistoryTable {
  id: string
  unitName: string
}
const UnitHistoryTable: React.FC<IUnitHistoryTable> = ({ id, unitName }) => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)
  const unitHistories= useAppSelector(
    (state: RootState) => state.unitHistory.unitHistories
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
      },
    },
  })

  useEffect(() => {
    const fetchUnitHistories = async () => {
      try {
        await dispatch(getUnitHistories(id))
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
  
    fetchUnitHistories()
  }, [])

  const columns = useUnitHistoryTable()

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={loading} {...props} />,
    [loading]
  )

  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        title={unitName}
        data={unitHistories.filter((history) => history.unit_id === id)}
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
