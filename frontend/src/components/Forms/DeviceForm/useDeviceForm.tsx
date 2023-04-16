import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postDevice } from 'store/actions/deviceActions/postDevice';
import { updateDevice } from 'store/actions/deviceActions/updateDevice';
import { IDevice } from '../../../models/IDevice';

interface UseDeviceFormProps {
  device?: IDevice;
}

export const useDeviceForm = ({ device }: UseDeviceFormProps) => {
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

  return { control, handleSubmit, register, errors, onSubmit };
};