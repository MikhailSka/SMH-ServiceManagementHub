import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postCustomer } from 'store/actions/customerActions/postCustomer';
import { updateCustomer } from 'store/actions/customerActions/updateCustomer';
import { ICustomer } from '../../../../models/ICustomer';

interface UseCustomerFormProps {
  customer?: ICustomer;
}

export const useCustomerForm = ({ customer }: UseCustomerFormProps) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ICustomer>({
    defaultValues: customer,
  });

  useEffect(() => {
    if (customer) {
      reset(customer);
    }
  }, [customer, reset]);

  const onSubmit = (data: ICustomer) => {
    if (customer) {
      data.id = customer.id;
      dispatch(updateCustomer(data));
    } else {
      dispatch(postCustomer(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};