import Avatar from '@mui/material/Avatar';
import './login.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/login';

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState();

function validation (email,password){
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailPattern.test(email)){
  if (password.length >= 8){
    return true

  }else return "pass must be at least 8 chars"

}else return "invalid email"
}
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
   let val=validation(data.get('email'),data.get('password'))
    if(val===true){
      axios
      .post(API_URL, {
        email: data.get('email'),
        password: data.get('password'),
      })
      .then((res) => {
        if(res.status===401){
          setData("invalid mail or password :)")

  
        }else if(res.status===200)
          
          console.log(res.data)
  const d = new Date();
  d.setTime(d.getTime() + (90*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = "accessToken =" + res.data.token + ";" + expires + ";path=/";
  navigate('/homeUser')
        
      })
      .catch((err) => {
        setData("invalid mail or password :)")

        console.error(err);
      });

    }else{
      setData(val);
     
     console.log(val) 
    }



  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
        id='loginContanier'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div id='loginDiv'> Login</div>
          <Avatar sx={{ m: 1, bgcolor: 'rgb(56, 108, 252)' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required 
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
             id='subBtn'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
            <Grid item xs>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
              </Grid>
              <Grid item >
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <hr></hr>
            <Grid container>
              <Grid item>
                <Typography className=''> New User ?</Typography>
              </Grid>
               
              <Grid item xs >
                <Link to ="/signupUser" className='SignupLink' variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {data&&<Alert variant={'danger'}>{data}</Alert>}
      </Container>
    </ThemeProvider>
  );
}

            