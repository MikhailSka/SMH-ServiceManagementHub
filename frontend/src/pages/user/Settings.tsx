import React from 'react'
import imageCompression from 'browser-image-compression'
import { Typography, Box, Input, Grid, Avatar, Divider } from '@mui/material'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

import { useAppSelector } from 'store/hooks'
import { useAppDispatch } from 'store/hooks'
import { RootState } from 'store/store'
import { useStyles } from '../../useStyles'
import { removeImage } from 'store/actions/userActions/removeImage'
import { uploadImage } from 'store/actions/userActions/uploadImage'
import { updateUserEmail } from 'store/actions/userActions/updateEmail'
import { updateUserName } from 'store/actions/userActions/updateName'
import { UploadButton } from 'components/Buttons/Components/UploadButton'
import { DeleteButton } from 'components/Buttons/Components/DeleteButton'
import { ChangeButton } from 'components/Buttons/Components/ChangeButton'
import { NameInput } from 'components/Inputs/Components/NameInput/NameInput'
import { EmailInput } from 'components/Inputs/Components/EmailInput/EmailInput'

interface UpdateNameInputs {
  name: string
}

interface UpdateEmailInputs {
  email: string
}

export default function Settings() {
  const dispatch = useAppDispatch()
  const classes = useStyles()
  const { userData } = useAppSelector((state: RootState) => state.user)

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      try {
        const originalImage = event.target.files[0]
        const compressedImage = await imageCompression(originalImage, {
          maxSizeMB: 0.032,
        })
        await dispatch(uploadImage(userData.id, compressedImage))
      } catch (error) {
        console.error('Image compression error:', error)
      }
    }
  }

  const {
    control: controlName,
    register: registerName,
    handleSubmit: handleSubmitName,
    formState: { errors: errorsName },
    watch: watchName,
  } = useForm<UpdateNameInputs>({
    defaultValues: {
      name: userData.name,
    },
  })

  const {
    control: controlEmail,
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
    watch: watchEmail,
  } = useForm<UpdateEmailInputs>({
    defaultValues: {
      email: userData.email,
    },
  })

  const onSubmitName: SubmitHandler<UpdateNameInputs> = async (data) => {
    dispatch(updateUserName(userData.id, data.name))
  }

  const onSubmitEmail: SubmitHandler<UpdateEmailInputs> = async (data) => {
    dispatch(updateUserEmail(userData.id, data.email))
  }

  return (
    <Box className={classes.box}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          paddingTop: '10px',
        }}
      >
        Settings
      </Typography>
      <Divider
        sx={{
          margin: '15px',
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography
            sx={{
              textAlign: 'center',
            }}
            gutterBottom
          >
            Profile Image
          </Typography>
          <Avatar
            src={userData.image!}
            style={{
              border: '1.5px solid lightgray',
              margin: ' 25px auto',
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
            }}
          />
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
            {userData.image && (
              <DeleteButton
                handleAction={() => dispatch(removeImage(userData.id))}
              />
            )}
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          xs={12}
          md={7}
        >
          <Typography
            sx={{
              textAlign: 'center',
            }}
            gutterBottom
          >
            Profile Info
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmitName(onSubmitName)}
            noValidate
          >
            <Grid  container alignItems="center" margin="15px" spacing={2}>
              <Grid padding="4px 0 5px" item xs={10}>
                <NameInput
                  control={controlName}
                  errors={errorsName}
                  register={registerName}
                />
              </Grid>
              <Grid item xs={2}>
                <ChangeButton disabled={userData.name === watchName('name')} />
              </Grid>
            </Grid>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmitEmail(onSubmitEmail)}
            noValidate
          >
            <Grid container alignItems="center" margin="15px" spacing={2}>
              <Grid padding="4px 0 5px" item xs={10}>
                <EmailInput
                  control={controlEmail}
                  errors={errorsEmail}
                  register={registerEmail}
                />
              </Grid>
              <Grid item xs={2}>
                <ChangeButton
                  disabled={userData.email === watchEmail('email')}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
