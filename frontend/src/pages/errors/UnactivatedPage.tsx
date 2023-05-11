import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { GoBackButton } from 'components/Buttons/Components/TextButtons/GoBackButton'

const UnactivatedPage = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/login')
  }

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', pt: 10 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Unactivated
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Sorry, but your account has not been activated.
      </Typography>
      <GoBackButton handleAction={handleGoBack} style={{ mt: 2 }} />
    </Container>
  )
}

export default UnactivatedPage
