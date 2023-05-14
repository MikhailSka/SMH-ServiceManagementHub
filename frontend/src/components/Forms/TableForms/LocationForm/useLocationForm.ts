import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from 'store/hooks';
import { getCustomers } from 'store/actions/customerActions/getCustomers';
import { postLocation } from 'store/actions/locationActions/postLocation';
import { updateLocation } from 'store/actions/locationActions/updateLocation';
import { ILocation } from '../../../../models/ILocation';

interface UseLocationFormProps {
  location?: ILocation;
}

export const useLocationForm = ({ location }: UseLocationFormProps) => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchOperatorsAndDevices = async () => {
      try {
        await Promise.all([dispatch(getCustomers())]);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOperatorsAndDevices();
  }, [dispatch]);

  return { control, handleSubmit, register, errors, onSubmit, loading };
};