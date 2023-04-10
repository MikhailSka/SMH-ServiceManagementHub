import React from 'react';
import { useEffect } from 'react';
import { useForm} from 'react-hook-form';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { NameInput } from 'components/Inputs/Components/NameInput/NameInput';
import { ActiveInput } from 'components/Inputs/Components/ActiveInput/ActiveInput';
import { useAppDispatch } from 'store/hooks';
import { postDevice } from 'store/actions/deviceActions/postDevice';
import { updateDevice } from 'store/actions/deviceActions/updateDevice';
import { IDevice } from '../../models/IDevice';
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton';

interface FormProps {
  device?: IDevice;
}

export const DeviceForm: React.FC<FormProps> = ({ device }) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IDevice>({
    defaultValues: device,
  });

  useEffect(() => {
    if (device) {
      reset(device);
    }
  }, [device, reset]);

  const onSubmit = (data: IDevice) => {
    if (device) {
      data.id = device.id;
      dispatch(updateDevice(data));
    } else {
      dispatch(postDevice(data));
    }
  };

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NameInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <ActiveInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};