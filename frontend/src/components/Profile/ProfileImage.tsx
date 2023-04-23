import React from 'react'
import { Grid, Typography, Input, Box } from '@mui/material'

import { ImageIcon } from 'components/IconsAndAnimations/ImageIcon'
import { useImageUpload } from '../../hooks/useImageUpload'
import { useRemoveImage } from '../../hooks/useRemoveImage'
import { UploadButton } from 'components/Buttons/Components/UploadButton'
import { DeleteButton } from 'components/Buttons/Components/DeleteButton'
import { UserData } from 'store/reducers/userReducer/UserState'

interface ProfileImageProps {
  userData: UserData
}

const ProfileImage: React.FC<ProfileImageProps> = ({ userData }) => {
  const handleImageUpload = useImageUpload(userData.id)
  const handleRemoveImage = useRemoveImage(userData.id)

  return (
    <Grid item xs={12} md={4}>
      <Typography
        sx={{
          textAlign: 'center',
        }}
        gutterBottom
      >
        Profile Image
      </Typography>
      <ImageIcon userData={userData} />
      <Grid
        sx={{
          margin: '7.5px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Box padding='2px'>
          <Input
            id="image"
            name="image"
            type="file"
            sx={{
              display: 'none',
            }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image">
            <UploadButton component="span" />
          </label>
        </Box>
        <Box padding='2px'>
          {userData.image && <DeleteButton handleAction={handleRemoveImage} />}
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProfileImage
