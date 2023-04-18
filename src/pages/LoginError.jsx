import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Container, Box, styled } from '@mui/material';
import { useSelector } from 'react-redux';

const StyledContent = styled('div')(({ }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export default function LoginError() {
  const {LoginError } = useSelector(state => state.allusers)


  return (
      <>
      {JSON.stringify(LoginError)}

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph className='pageNotFond'>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          <h1></h1> loginError: {LoginError}
            </Typography> 
          
          <Box
            component="img"
            src="https://thumbs.dreamstime.com/b/house-not-available-white-background-sign-label-flat-style-201430826.jpg"
            sx={{ height: 200, m:0, my: { xs: 5, sm: 10 } }}/>
          <Button to="/register" size="large" variant="contained" color="secondary" component={RouterLink}>
            Go to Register
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}