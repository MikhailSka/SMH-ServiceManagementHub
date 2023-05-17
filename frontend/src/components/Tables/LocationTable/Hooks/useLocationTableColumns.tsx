import { MUIDataTableColumn } from 'mui-datatables'

import { getDateOptions } from 'components/Tables/Common/ColumnsOptions/Date/getDateOptions'
import { getActiveOptions } from 'components/Tables/Common/ColumnsOptions/Active/activeOption'
import LocationRowActions from '../Components/LocationRowActions'

export const useLocationTableColumns = (locations: any[]) => {
  const columns: MUIDataTableColumn[] = [
    {
      label: 'Active',
      name: 'active',
      options: getActiveOptions(),
    },
    {
      label: 'Name',
      name: 'name',
      options: {
        filter: false,
      },
    },
    {
      label: 'Customer Name',
      name: 'customer_name',
      options: {
        filter: false,
      },
    },
    {
      name: 'creation_date',
      label: 'Creation Date',
      options: getDateOptions(),
    },
    {
      name: 'modification_date',
      label: 'Modification Date',
      options: getDateOptions(),
    },
    {
      label: 'Actions',
      name: 'actions',
      options: {
        customBodyRender: (_, tableMeta) => {
          return <LocationRowActions location={locations[tableMeta.rowIndex]} />
        },
        filter: false,
        sort: false,
      },
    },
  ]

  return columns
}