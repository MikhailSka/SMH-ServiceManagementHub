import { MUIDataTableColumn } from 'mui-datatables';

import { formatDate } from './formatTime';

export const getDateOptions = (type = 'datetime'): MUIDataTableColumn['options'] => ({
    customBodyRender: (value: string) => formatDate(value, type),
  });