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
      options: {
        filter: false
      }
    },
    {
      label: 'Serial Number',
      name: 'serial_number',
      options: {
        filter: false
      }
    },
    {
      label: 'Product Code',
      name: 'product_code',
      options: {
        filter: false
      }
    },
    {
      label: 'Location',
      name: 'location_name',
      options: {
        filter: false
      }
    },
    {
      label: 'Customer',
      name: 'customer_name',
      options: {
        filter: false,
        customBodyRender: (_, tableMeta) => {
          const service = services[tableMeta.rowIndex]
          return <CustomerIcon service={service} />
        },
      },
    },
    {
      label: 'Device Name',
      name: 'device_name',
      options: {
        filter: false
      }
    },
    {
      label: 'Operator Name',
      name: 'operator_name',
      options: {
        filter: false
      }
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