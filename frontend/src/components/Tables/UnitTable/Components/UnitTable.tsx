import React, { useMemo, useEffect, useState } from 'react'
import MUIDataTable, {
  MUIDataTableBody,
  MUIDataTableState,
} from 'mui-datatables'
import { Box } from '@mui/material'

import { RootState } from '../../../../store/store'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getUnits } from 'store/actions/tableActions/unitActions/getUnits'
import { useUnitTableColumns } from '../Hooks/useUnitTableColumns'
import { LoadingTableBody } from '../../Common/LoadingTableBody'
import { UnitTableToolbar } from './UnitTableToolbar'
import { useStyles } from '../../../../useStyles'

const UnitTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const { units, isLoading, totalUnits } = useAppSelector(
    (state: RootState) => state.unit
  )

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
  const [filterList, setFilterList] = useState({})

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  useEffect(() => {
    dispatch(
      getUnits(
        page,
        rowsPerPage,
        debouncedSearchQuery,
        sortField!,
        sortOrder!,
        filterList
      )
    )
  }, [
    dispatch,
    page,
    rowsPerPage,
    debouncedSearchQuery,
    sortField,
    sortOrder,
    filterList,
  ])

  type FilterType = string[];

  const handleFilter = (applyNewFilters: () => FilterType[]) => {
    const filters = applyNewFilters().reduce((acc: { [key: string]: FilterType }, curr: FilterType, idx: number) => {
      if (curr.length > 0) {
        acc[columns[idx].name] = curr;
      }
      return acc;
    }, {});
  
    setFilterList(filters);
  };

  const columns = useUnitTableColumns(units)

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
        columns={columns}
        data={units}
        options={{
          serverSide: true,
          filterType: 'dropdown',
          selectableRows: 'none' as const,
          rowsPerPageOptions: [10, 25, 50],
          customToolbar: () => <UnitTableToolbar />,
          count: totalUnits,
          onTableChange: (action, tableState: MUIDataTableState) => {
            switch (action) {
              case 'changePage':
                setPage(tableState.page)
                break
              case 'changeRowsPerPage':
                setPage(0)
                setRowsPerPage(tableState.rowsPerPage)
                break
              case 'search':
                setSearchQuery(tableState.searchText || '')
                setPage(0)
                break
              default:
                break
            }
          },
          onColumnSortChange: (changedColumn: string, direction: string) => {
            let newSortField: string | null = null
            let newSortOrder: 'asc' | 'desc' | null = null

            if (direction !== 'none') {
              newSortField = changedColumn
              newSortOrder = direction as 'asc' | 'desc'
            }

            setSortField(newSortField)
            setSortOrder(newSortOrder)
            setPage(0)
          },
          onFilterChange: (changedColumn, filterList, type, changedColumnIndex) => {
            if (Array.isArray(filterList)) {
                handleFilter(() => filterList);
            }
        },
        }}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  )
}

export default UnitTable
