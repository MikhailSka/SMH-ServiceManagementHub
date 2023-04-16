import React from 'react'
import { Grid, Typography, Input } from '@mui/material'

import { ProfileImage as PImage } from 'components/IconsAndAnimations/ProfileImage'
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
      <PImage src={userData.image!} />
      <Grid
        sx={{
          margin: '7.5px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
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
        {userData.image && <DeleteButton handleAction={handleRemoveImage} />}
      </Grid>
    </Grid>
  )
}

export default ProfileImage
