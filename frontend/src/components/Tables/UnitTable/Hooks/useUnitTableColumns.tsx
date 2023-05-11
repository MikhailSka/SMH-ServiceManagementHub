import { MUIDataTableColumn } from 'mui-datatables'

import { getDateOptions } from 'components/Tables/Common/ColumnsOptions/Date/dateOption'
import { getActiveOptions } from 'components/Tables/Common/ColumnsOptions/Active/activeOption'
import { UnitRowActions } from '../Components/UnitRowActions'

export const useUnitTableColumns = (units: any[]) => {
  const columns: MUIDataTableColumn[] = [
    {
      label: 'Active',
      name: 'active',
      options: getActiveOptions(),
    },
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Serial Number',
      name: 'serial_number',
    },
    {
      label: 'Product Code',
      name: 'product_code',
    },
    {
      label: 'Location',
      name: 'location_name',
    },
    {
      label: 'Device Name',
      name: 'device_name',
    },
    {
      label: 'Operator Name',
      name: 'operator_name',
    },
    {
      label: 'Description',
      name: 'description',
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
          return <UnitRowActions unit={units[tableMeta.rowIndex]} />
        },
        filter: false,
        sort: false,
      },
    },
  ]

  return columns
}
