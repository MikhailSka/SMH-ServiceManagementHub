import React from 'react'
import { useAppSelector } from 'store/hooks'
import { useAppDispatch } from 'store/hooks'
import { RootState } from 'store/store'
import { useStyles } from '../../useStyles'
import { uploadImage } from 'store/actions/userActions/uploadImage'
import imageCompression from 'browser-image-compression'
import { Typography, Box, Input, Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import UploadIcon from '@mui/icons-material/Upload'
import DeleteIcon from '@mui/icons-material/Delete'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { NameInput } from 'components/Inputs/Components/NameInput/NameInput'
import { EmailInput } from 'components/Inputs/Components/EmailInput/EmailInput'
import { removeImage } from 'store/actions/userActions/removeImage'
import Button from '@mui/material/Button'

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
    console.log(`name: ${data}`)
  }

  const onSubmitEmail: SubmitHandler<UpdateEmailInputs> = async (data) => {
    console.log(`email: ${data}`)
  }

  return (
    <Box className={classes.box}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
        }}
      >
        Settings
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom>
        Profile Image
      </Typography>

      {userData.image && (
        <Box
          sx={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            order: '1px solid #ccc',
            padding: '4px',
            borderRadius: '4px',
            display: 'inline-block',
          }}
        >
          <img alt="not found" width={'250px'} src={userData.image} />
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
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
          <IconButton color="primary" component="span">
            <UploadIcon />
          </IconButton>
        </label>
        {userData.image && (
          <IconButton
            color="error"
            onClick={() => dispatch(removeImage(userData.id))}
            aria-label="remove image"
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmitName(onSubmitName)}
        noValidate
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <NameInput
              control={controlName}
              errors={errorsName}
              register={registerName}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              disabled={userData.name === watchName('name')}
            >
              Update Name
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmitEmail(onSubmitEmail)}
        noValidate
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <EmailInput
              control={controlEmail}
              errors={errorsEmail}
              register={registerEmail}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              disabled={userData.email === watchEmail('email')}
            >
              Update Email
            </Button>
          </Grid>
        </Grid>
      </Box>

    </Box>
  )
}