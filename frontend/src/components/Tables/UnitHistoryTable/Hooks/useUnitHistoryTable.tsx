import { MUIDataTableColumn } from 'mui-datatables'

import { getDateOptions } from 'components/Tables/Common/ColumnsOptions/Date/getDateOptions'
import { getDescriptionOption } from 'components/Tables/Common/ColumnsOptions/Description/descriptionOption'

export const useUnitHistoryTable = () => {
  const columns: MUIDataTableColumn[] = [
    {
      label: 'Location',
      name: 'location_name',
    },
    {
      label: 'User Name',
      name: 'user_name',
    },
    {
      name: 'service_date',
      label: 'Service Date',
      options: getDateOptions('time'),
    },
    {
      label: 'Description',
      name: 'description',
      options: getDescriptionOption(),
    },
    {
      name: 'creation_date',
      label: 'Creation Date',
      options: getDateOptions(),
    },
  ]

  return columns
}
