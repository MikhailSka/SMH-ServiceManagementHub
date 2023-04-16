import { MUIDataTableColumn } from 'mui-datatables';
import { getDateOptions } from 'components/Tables/Common/ColumnsOptions/Date/dateOption';
import { getActiveOptions } from 'components/Tables/Common/ColumnsOptions/Active/activeOption';
import DeviceRowActions from './DeviceRowActions';
 
export const useDeviceTableColumns = (devices: any[]) => {
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
      name: 'creation_date',
      label: 'Creation Date',
      options: getDateOptions()
    },
    {
      name: 'modification_date',
      label: 'Modification Date',
      options: getDateOptions()
    },
    {
      label: 'Actions',
      name: 'actions',
      options: {
        customBodyRender: (_, tableMeta) => {
          const device = devices[tableMeta.rowIndex]
          return <DeviceRowActions device={device} />
        },
        filter: false,
        sort: false,
      },
    },
  ]

  return columns;
};