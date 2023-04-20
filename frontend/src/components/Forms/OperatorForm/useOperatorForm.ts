import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postOperator } from 'store/actions/operatorActions/postOperator';
import { updateOperator } from 'store/actions/operatorActions/updateOperator';
import { IOperator } from '../../../models/IOperator';

interface UseOperatorFormProps {
  operator?: IOperator;
}

export const useOperatorForm = ({ operator }: UseOperatorFormProps) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IOperator>({
    defaultValues: operator,
  });

  useEffect(() => {
    if (operator) {
      reset(operator);
    }
  }, [operator, reset]);

  const onSubmit = (data: IOperator) => {
    if (operator) {
      data.id = operator.id;
      dispatch(updateOperator(data));
    } else {
      dispatch(postOperator(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};