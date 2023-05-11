import React, { useMemo, useEffect } from 'react';
import MUIDataTable, { MUIDataTableBody } from 'mui-datatables';
import { Box } from '@mui/material';

import { RootState } from '../../../../store/store';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getLocations } from 'store/actions/locationActions/getLocations';
import { useLocationTableColumns } from '../Hooks/useLocationTableColumns';
import { LoadingTableBody } from '../../Common/LoadingTableBody';
import { LocationTableToolbar } from './LocationTableToolbar';
import { useStyles } from '../../../../useStyles';

const LocationTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { locations, isLoading } = useAppSelector(
    (state: RootState) => state.location,
  );

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const columns = useLocationTableColumns(locations);

  const classes = useStyles();

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) => (
      <LoadingTableBody loading={isLoading} {...props} />
    ),
    [isLoading],
  );

  return (
    <Box className={classes.box}>
      <MUIDataTable
        title={'Locations'}
        data={locations}
        columns={columns}
        options={{
          selectableRows: 'none' as const,
          rowsPerPageOptions: [10, 25, 50],
          customToolbar: () => <LocationTableToolbar />,
        }}
        components={{ TableBody: BodyComponent }}
      />
    </Box>
  );
};

export default LocationTable;