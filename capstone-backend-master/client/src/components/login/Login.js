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
import './Login.css'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { signIn } from '../../store/actions/index'

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

const Login = ({ onSignUser, user, error }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className='logindiv'>
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
            Sign in
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
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
            {submitted && !email && (
              <div style={{ color: 'red' }}>Email is required</div>
            )}
            <br />
            {submitted && !regex.test(email) && (
              <div style={{ color: 'red' }}>
                This is not a valid email format!
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoFocus
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                inputProps: { min: 5 },
              }}
            />
            {submitted && !password && (
              <div style={{ color: 'red' }}>Password is required</div>
            )}
            {submitted && password.length < 5 && (
              <div style={{ color: 'red' }}>
                Password must be at least 5 characters long
              </div>
            )}
            <Button
              className='btn'
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#3f51b5' }}
              onClick={() => {
                return (
                  <React.Fragment>
                    {setSubmitted(true)}
                    {!error &&
                      email &&
                      password &&
                      onSignUser(email, password, navigate, location)}
                  </React.Fragment>
                )
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/signup' variant='body2' color='#53178f'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <br />
        {error ? (
          <div style={{ color: 'red' }}>Incorrect username/password</div>
        ) : null}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    error: state.errors.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUser: (email, password, navigate, location) =>
      dispatch(signIn(email, password, navigate, location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
