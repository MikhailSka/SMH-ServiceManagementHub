import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from 'store/hooks'
import { updateUserEmail } from 'store/actions/userActions/userProfileActions/updateEmail'

import { UserData } from 'store/reducers/userReducer/UserState'

interface EmailFormInputs {
  email: string
}

export const useEmailForm = (userData: UserData) => {
  const dispatch = useAppDispatch()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EmailFormInputs>({
    defaultValues: {
      email: userData.email,
    },
  })

  const onSubmit: SubmitHandler<EmailFormInputs> = async (data) => {
    dispatch(updateUserEmail(userData.id, data.email))
  }

  return {
    controlEmail: control,
    registerEmail: register,
    handleSubmitEmail: handleSubmit,
    errorsEmail: errors,
    watchEmail: watch,
    onSubmitEmail: onSubmit,
  }
}
