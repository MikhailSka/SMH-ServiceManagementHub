import { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { login } from 'store/actions/userActions/login'

interface LoginFormInputs {
  email: string
  password: string
}

export const useLoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await dispatch(login(data.email, data.password ))
      navigate('/')
    } catch (error) {
      // Handle login errors, if necessary
    }
  }

  return { control, handleSubmit, register, errors, onSubmit }
}
