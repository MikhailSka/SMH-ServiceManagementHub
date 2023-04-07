import ActiveStatusRenderer from './activeStatusRenderer';
import { MUIDataTableColumn } from 'mui-datatables';
import { activeLogic } from './activeLogic';

export const getActiveOptions = (): MUIDataTableColumn['options'] => ({
  customBodyRender: (value) => <ActiveStatusRenderer value={value} />,
  filterOptions: {
    names: ['Yes', 'No'],
    logic: activeLogic,
  },
});