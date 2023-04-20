import imageCompression from 'browser-image-compression'

import { useAppDispatch } from 'store/hooks'
import { uploadImage } from 'store/actions/userActions/uploadImage'
import { showSnackbar } from 'store/actions/snackbarActions/showSnackbar'

export const useImageUpload = (userId: string) => {
  const dispatch = useAppDispatch()

  return async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      try {
        const originalImage = event.target.files[0]
        const compressedImage = await imageCompression(originalImage, {
          maxSizeMB: 0.032,
        })
        await dispatch(uploadImage(userId, compressedImage))
      } catch (error) {
        dispatch(showSnackbar('An error occurred while image compression', 'error'));
      }
    }
  }
}
