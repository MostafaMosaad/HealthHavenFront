// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const theme = createTheme();
const API_URL = 'http://localhost:3000/api/signup';

export default function SignUpDoc() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [category, setCategory] = useState(""); 
  const [major, setMajor] = useState(""); 
  const handleChange = (e) =>  {

    setCategory(e.target.value)
  }
  const handleChange2 = (event) =>  {
    setMajor(event.target.value)
  }


  function validation (name,phone,email,address,password,password2,category,major){
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    const phonePattern = /^01\d{9}$/;
    const namePattern = /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+){1,}$/;

    if (emailPattern.test(email)) {
        if (password.length >= 8) {
            if (password === password2) {
              console.log(password)
              console.log(password2)
                if (phonePattern.test(phone)) {
                    if (namePattern.test(name)) {
                        if (address) {
                            if (category) {
                                return true
                            } else {
                                return "category must be selected";
                            }
                        } else {
                            return "address is not provided";
                        }
                    } else {
                        return "name is invalid";
                    }
                } else {
                    return "phone is 11 numbers start with 01";
                }
            } else {
                return "passwords do not match";
            }
        } else {
            return "password must be at least 8 characters";
        }
    } else {
        return "invalid email";
    }

}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
    password: data.get('password'),
    confirmPassword : data.get('confirmPassword'),
    phone: data.get('phone'),
    address: data.get('address'),
    category: data.get('category'),
    major: data.get('major'),

    });
    let val=validation(data.get('name'),data.get('phone'),data.get('email'),data.get('address'),
    data.get('password'),data.get('confirmPassword'),data.get('category'),data.get('major'))
console.log(val)
if(val===true){
  axios
  .post(API_URL, {
    name: data.get('name'),
    email: data.get('email'),
    password: data.get('password'),
    phone: data.get('phone'),
    address: data.get('address'),
    category: data.get('category'),
    major: data.get('major'),
  })
   .then((res) => {
     if(res.status===201){
       setError()
       setSuccess ("Added successfully")
      
      //  setTimeout(()=>{
      //    navigate('/login')
      //  },5000)
    }
   })
   .catch((err) => {
     setError(err)
     console.error(err);
   });

 }else{
   setError(val);

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
        {error&&<Alert variant={'danger'}>{error}</Alert>}
        {success&&<Alert variant={'success'}>{success}</Alert>}

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
                type="text"
                pattern="[0-9]{11}"
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
                id="confirmPassword"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
 {/* //////////////////////////////////////////////////////// */}
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                label="Major"
                name="major"
                value={category}
                onChange={handleChange}
                select
              >
            <MenuItem value="Professor">Professor</MenuItem>
            <MenuItem value="Lecturer">Lecturer</MenuItem>
            <MenuItem value="Consultant">Consultant</MenuItem>
            <MenuItem value="Specialist">Specialist</MenuItem>
            
            </TextField>
            </Grid>


            {/* //////////////////////////////////////////////////////////////////// */}
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                label="category"
                name="category"
                value={major}
                onChange={handleChange2}
                select
              >
            <MenuItem value="Skin">Skin</MenuItem>
            <MenuItem value="Teeth">Teeth</MenuItem>
            <MenuItem value="Child">Child</MenuItem>
            <MenuItem value="Brain and Nerves">Brain and Nerves</MenuItem>
            <MenuItem value="Bones">Bones</MenuItem>
            <MenuItem value="Ear, Nose and Throat">Ear, Nose and Throat</MenuItem>
            <MenuItem value="Heart">Heart</MenuItem>
            <MenuItem value="Nutritionist">Nutritionist</MenuItem>

            </TextField>
            </Grid>
            {/* /////////////////////////////////////////////////////////////////////////////// */}
           
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