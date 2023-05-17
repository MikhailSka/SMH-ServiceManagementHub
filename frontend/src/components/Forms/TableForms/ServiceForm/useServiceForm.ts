import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from 'store/hooks';
import { updateUnitAndCreateHistory } from 'store/actions/tableActions/serviceAvctions/updateUnitAndCreateHistory';
import { getLocations } from 'store/actions/tableActions/locationActions/getLocations';
import { useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';
import { IService } from 'models/IService';

interface UseServiceFormProps {
  service: IService;
}

export const useServiceForm = ({ service }: UseServiceFormProps) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(
    (state: RootState) => state.location.isLoading
  )
  const { userData } = useAppSelector((state: RootState) => state.user);

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IService>({
    defaultValues: service,
  });

  useEffect(() => {
    if (service) {
      reset(service);
    }
  }, [service, reset]);

  const onSubmit = (data: IService) => {
    data.id = service.id;
    dispatch(updateUnitAndCreateHistory(data, userData.id!));
  };

  useEffect(() => {
    const fetchLocations = async () => {
      await dispatch(getLocations())
    };
    fetchLocations();
  }, [dispatch]);

  return { control, handleSubmit, register, errors, onSubmit, loading };
};