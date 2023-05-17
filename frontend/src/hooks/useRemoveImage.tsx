import { useAppDispatch } from 'store/hooks'
import { removeImage } from 'store/actions/userActions/userProfileActions/removeImage'

export const useRemoveImage = (userId: string) => {
  const dispatch = useAppDispatch()

  return () => {
    dispatch(removeImage(userId))
  }
}
