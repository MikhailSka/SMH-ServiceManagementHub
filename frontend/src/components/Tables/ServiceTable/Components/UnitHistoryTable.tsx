import React from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { IUnitHistory } from 'models/IUnitHistory'

interface Props {
  data: IUnitHistory[]
}

const columns: MUIDataTableColumn[] = [
  {
    label: 'Unit Name',
    name: 'unit_name'
  },
  {
    label: 'Location Name',
    name: 'location_name'
  },
  {
    label: 'User Name',
    name: 'user_name'
  },
  {
    label: 'Creation Date',
    name: 'creation_date'
  },
  // Add other columns as needed
]

export const UnitHistoryTable: React.FC<Props> = ({ data }) => {
  return (
    <MUIDataTable
      title={'Unit Histories'}
      data={data}
      columns={columns}
      options={{
        selectableRows: 'none' as const,
      }}
    />
  )
}