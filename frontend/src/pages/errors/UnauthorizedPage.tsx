import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { GoBackButton } from 'components/Buttons/Components/TextButtons/GoBackButton';

const UnauthorizedPage = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-2)
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', pt: 10 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Unauthorized
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        You do not have permission to access this page.
      </Typography>
      <GoBackButton handleAction={handleGoBack} style={{ mt: 2 }}/>
    </Container>
  );
};

export default UnauthorizedPage;