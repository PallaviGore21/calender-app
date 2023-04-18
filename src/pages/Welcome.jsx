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

export default function Welcome() {
  const { login,loginError } = useSelector(state => state.allusers)


  return (
    <>
      {/* {JSON.stringify(login)}<br/> */}

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph className='pageNotFond'>
             <h1 className='link-danger'>Hey {login.name}</h1>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            <div><strong>{login.email}</strong></div>
            Welcome to our Website</Typography> 
          
          <Box
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQFVQCp7yzhUVVXKts-wTiulQhEKa4XpBIw&usqp=CAU"
            sx={{ height: 200, m:0, my: { xs: 5, sm: 10 } }}/>
          <Button to="/dashboard" size="large" variant="contained" color="secondary" component={RouterLink}>
            Go to Dashboard
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}