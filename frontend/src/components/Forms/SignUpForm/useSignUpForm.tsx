import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { register as registerAction } from 'store/actions/userActions/register';

interface SignUpFormInputs {
  email: string;
  name: string;
  password: string;
}

export const useSignUpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    dispatch(registerAction(data.email, data.name, data.password, navigate));
  };

  return { control, handleSubmit, register, errors, onSubmit };
};