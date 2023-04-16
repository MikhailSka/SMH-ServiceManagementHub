import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useStyles } from '../../useStyles'
import { useAppDispatch } from 'store/hooks'
import { EmailInput } from 'components/Inputs/Components/EmailInput/EmailInput'
import { PasswordInput } from 'components/Inputs/Components/PasswordInput/PasswordInput'
import { login } from 'store/actions/userActions/login'

interface LoginFormInputs {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await dispatch(login(data.email, data.password))
      navigate('/') // Navigate to /home after successful login
    } catch (error) {
      // Handle login errors, if necessary
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        className={classes.registerBox}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <EmailInput
            control={control}
            errors={errors}
            register={register}
          />
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
            Login
          </Button>
          <Grid item sx={{ textAlign: 'right' }}>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
