// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';







const theme = createTheme();
const API_URL = 'https://healthhaven.onrender.com/api/signup';

export default function SignUpUser() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  function validation (name,phone,email,DOB,password,password2){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^01\d{9}$/;
    const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
  if(emailPattern.test(email)){
    if (password.length >= 8){
      if(password2===password){
        if(phonePattern.test(phone)){
          if(namePattern.test(name)){
            if(/^(19[3-9]\d|20[0-1]\d|2022|2023)$/.test(DOB)){
              return true

            }else return " year of birth should be between 1930 and 2023"

          }else return "name is invalid"

        }else return "phone is 11 number start with 01"

      }else return "not matched password"

      // return true
  
    }else return "pass must be at least 8 chars"
  
  }else return "invalid email"
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    password: data.get('password'),
    phone: data.get('phone'),
    DateOfBirth: data.get('DateOfBirth'),
    name: data.get('name'),

    });
    let val=validation(data.get('name'),data.get('phone'),data.get('email'),data.get('DateOfBirth'),data.get('password'),data.get('confirmPassword'))
console.log(val)
if(val===true){
  axios
  .post(API_URL, {
    email: data.get('email'),
    password: data.get('password'),
    phone: data.get('phone'),
    DateOfBirth: data.get('DateOfBirth'),
    name: data.get('name'),
    
  })
  .then((res) => {
    if(res.status===201){
      setData ("Added successfully")
      setTimeout(()=>{
        navigate('/login')
      },5000)
    }
  })
  .catch((err) => {
    setData(err)
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
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {data&&<Alert variant={'danger'}>{data}</Alert>}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="number"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="DateOfBirth"
                  label="Year Of Birth"
                  name="DateOfBirth"
                  autoComplete="Date Of Birth"
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
