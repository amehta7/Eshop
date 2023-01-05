import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import './SignUp.css'

const Copyright = (props) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='#53178f' href='https://www.upgrad.com/us/'>
        upGrad
      </Link>{' '}
      2021
      {'.'}
    </Typography>
  )
}

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [cnumber, setCnumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      'Email:',
      email,
      'Password: ',
      password,
      'Fname:',
      fname,
      'Lname:',
      lname,
      'Contactnumber:',
      cnumber
    )
    setEmail('')
    setPassword('')
    setFname('')
    setLname('')
    setCnumber('')
  }

  return (
    <div className='signupdiv'>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#e50c6b' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='firstname'
              label='First Name'
              name='firstname'
              autoComplete='firstname'
              autoFocus
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='lastname'
              label='Last Name'
              name='lastname'
              autoComplete='lastname'
              autoFocus
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirmpassword'
              label='Confirm Password'
              type='password'
              id='confirmpassword'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='contactNumber'
              label='Contact Number'
              id='contactNumber'
              autoFocus
              value={cnumber}
              onChange={(e) => setCnumber(e.target.value)}
            />
            <Button
              className='btn'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#3f51b5' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/login' variant='body2' color='#53178f'>
                  {'Already have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  )
}

export default Signup
