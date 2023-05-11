import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { GoBackButton } from 'components/Buttons/Components/TextButtons/GoBackButton';

const NotFoundPage = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', pt: 10 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <GoBackButton handleAction={handleGoBack} style={{ mt: 2 }}/>
    </Container>
  );
};

export default NotFoundPage;