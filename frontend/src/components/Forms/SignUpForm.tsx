import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

import { useStyles } from '../../useStyles'
import { useAppDispatch } from 'store/hooks'
import { EmailInput } from 'components/Inputs/Components/EmailInput/EmailInput'
import { NameInput } from 'components/Inputs/Components/NameInput/NameInput'
import { PasswordInput } from 'components/Inputs/Components/PasswordInput/PasswordInput'
import { register as registerAction } from 'store/actions/userActions/register'

interface SignUpFormInputs {
  email: string
  name: string
  password: string
}
export const SignUpForm: React.FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>()

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    dispatch(registerAction(data.email, data.name, data.password))
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        className={classes.registerBox}
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
          <EmailInput
            control={control}
            errors={errors}
            register={register}
          />
          <NameInput
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
