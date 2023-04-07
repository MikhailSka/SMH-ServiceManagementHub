import { MUIDataTableColumn } from 'mui-datatables';

import { formatDateTime } from './formatDateTime';

export const getDateOptions = (): MUIDataTableColumn['options'] => ({
    customBodyRender: (value: string) => formatDateTime(value),
  });