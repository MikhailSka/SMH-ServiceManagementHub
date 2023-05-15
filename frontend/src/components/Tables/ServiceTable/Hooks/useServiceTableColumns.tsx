import { MUIDataTableColumn } from 'mui-datatables'

import { ServiceRowActions } from '../Components/ServiceRowActions'
import { getDateOptions } from 'components/Tables/Common/ColumnsOptions/Date/getDateOptions'
import { getDescriptionOption } from 'components/Tables/Common/ColumnsOptions/Description/descriptionOption'
import { getActiveOptions } from 'components/Tables/Common/ColumnsOptions/Active/activeOption'
import { CustomerIcon } from 'components/IconsAndAnimations/CustomerIcon'

export const useServiceTableColumns = (
  services: any[],
) => {
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
      label: 'Customer',
      name: 'customer_name',
      options: {
        customBodyRender: (_, tableMeta) => {
          const service = services[tableMeta.rowIndex]
          return <CustomerIcon service={service} />
        },
      },
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
          return (
            <ServiceRowActions
          service={services[tableMeta.rowIndex]}
        />
          )
        },
        filter: false,
        sort: false,
      },
    },
  ]

  return columns
}
