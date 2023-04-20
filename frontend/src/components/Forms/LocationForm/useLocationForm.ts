import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postLocation } from 'store/actions/locationActions/postLocation';
import { updateLocation } from 'store/actions/locationActions/updateLocation';
import { ILocation } from '../../../models/ILocation';

interface UseLocationFormProps {
  location?: ILocation;
}

export const useLocationForm = ({ location }: UseLocationFormProps) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ILocation>({
    defaultValues: location,
  });

  useEffect(() => {
    if (location) {
      reset(location);
    }
  }, [location, reset]);

  const onSubmit = (data: ILocation) => {
    if (location) {
      data.id = location.id;
      dispatch(updateLocation(data));
    } else {
      dispatch(postLocation(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};