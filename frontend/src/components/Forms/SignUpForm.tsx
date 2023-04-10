import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from 'store/hooks'
import { EmailInput } from 'components/Inputs/Components/EmailInput/EmailInput'
import { PasswordInput } from 'components/Inputs/Components/PasswordInput/PasswordInput'
import { register as registerAction } from 'store/actions/authActions/register'

interface SignUpFormInputs {
  email: string
  password: string
}
export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>()

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    dispatch(registerAction(data.email, data.password))
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#ffffff',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <EmailInput control={control} errors={errors} register={register} />
          <PasswordInput
            control={control}
            errors={errors}
            register={register}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid item sx={{ textAlign: 'right' }}>
            <Link href="/login" variant="body2">
              {'Already have an account? Login'}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
