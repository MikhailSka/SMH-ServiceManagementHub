import { MUIDataTableColumn } from 'mui-datatables';

import { getDateOptions } from 'components/Tables/Common/ColumnsOptions/Date/dateOption';
import { getActiveOptions } from 'components/Tables/Common/ColumnsOptions/Active/activeOption';
import DeviceRowActions from '../Components/DeviceRowActions';
 
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
          return <DeviceRowActions device={devices[tableMeta.rowIndex]} />
        },
        filter: false,
        sort: false,
      },
    },
  ]

  return columns;
};