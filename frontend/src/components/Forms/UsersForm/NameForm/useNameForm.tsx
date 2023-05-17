import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from 'store/hooks'
import { updateUserName } from 'store/actions/userActions/userProfileActions/updateName'

interface NameFormInputs {
  name: string
}

export const useNameForm = (userData: any) => {
  const dispatch = useAppDispatch()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NameFormInputs>({
    defaultValues: {
      name: userData.name,
    },
  })

  const onSubmit: SubmitHandler<NameFormInputs> = async (data) => {
    dispatch(updateUserName(userData.id, data.name))
  }

  return {
    controlName: control,
    registerName: register,
    handleSubmitName: handleSubmit,
    errorsName: errors,
    watchName: watch,
    onSubmitName: onSubmit,
  }
}
