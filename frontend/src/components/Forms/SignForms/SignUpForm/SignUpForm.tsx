import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useStyles } from '../../../../useStyles';
import { EmailInput } from 'components/Inputs/EmailInput/Components/EmailInput';
import { NameInput } from 'components/Inputs/NameInput/Components/NameInput';
import { PasswordInput } from 'components/Inputs/PasswordInput/Components/PasswordInput';
import { useSignUpForm } from './useSignUpForm';
export const SignUpForm: React.FC = () => {
  const classes = useStyles();

  const { control, handleSubmit, register, errors, onSubmit } = useSignUpForm();

  return (
    <Container component="main" maxWidth="sm">
      <Box className={classes.smBox}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <EmailInput control={control} errors={errors} register={register} />
          <NameInput control={control} errors={errors} register={register} />
          <PasswordInput control={control} errors={errors} register={register} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
  );
};