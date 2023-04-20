import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postCustomerLocation } from 'store/actions/customerLocationActions/postCustomerLocation';
import { updateCustomerLocation } from 'store/actions/customerLocationActions/updateCustomerLocation';
import { ICustomerLocation } from '../../../models/ICustomerLocation';

interface UseCustomerLocationFormProps {
  customerLocation?: ICustomerLocation;
}

export const useCustomerLocationForm = ({ customerLocation }: UseCustomerLocationFormProps) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ICustomerLocation>({
    defaultValues: customerLocation,
  });

  useEffect(() => {
    if (customerLocation) {
      reset(customerLocation);
    }
  }, [customerLocation, reset]);

  const onSubmit = (data: ICustomerLocation) => {
    if (customerLocation) {
      data.id = customerLocation.id;
      dispatch(updateCustomerLocation(data));
    } else {
      dispatch(postCustomerLocation(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};