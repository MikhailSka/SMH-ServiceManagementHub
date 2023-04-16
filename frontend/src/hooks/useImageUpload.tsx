import imageCompression from 'browser-image-compression'

import { useAppDispatch } from 'store/hooks'
import { uploadImage } from 'store/actions/userActions/uploadImage'

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
        console.error('Image compression error:', error)
      }
    }
  }
}