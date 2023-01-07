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
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../store/actions/index'

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

const Signup = ({ onSignUpUser, user, error }) => {
  const navigate = useNavigate()
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='firstname'
              label='First Name'
              name='firstname'
              autoComplete='firstname'
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {submitted && !firstName && (
              <div style={{ color: 'red' }}>First Name is required</div>
            )}
            {submitted && firstName.length < 5 && (
              <div style={{ color: 'red' }}>
                First Name must be at least 5 characters long
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              id='lastname'
              label='Last Name'
              name='lastname'
              autoComplete='lastname'
              autoFocus
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {submitted && !lastName && (
              <div style={{ color: 'red' }}>Last Name is required</div>
            )}
            {submitted && lastName.length < 5 && (
              <div style={{ color: 'red' }}>
                Last Name must be at least 5 characters long
              </div>
            )}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {submitted && !password && (
              <div style={{ color: 'red' }}>Password is required</div>
            )}
            {submitted && password.length < 5 && (
              <div style={{ color: 'red' }}>
                Password must be at least 5 characters long
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirmpassword'
              label='Confirm Password'
              type='password'
              id='confirmpassword'
              autoFocus
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            {submitted && !rePassword && (
              <div style={{ color: 'red' }}>Confirm Password is required</div>
            )}
            {submitted && password !== rePassword && (
              <div style={{ color: 'red' }}>
                Password and ConfirmPassword are not match
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              name='contactNumber'
              label='Contact Number'
              id='contactNumber'
              autoFocus
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            {submitted && !contactNumber && (
              <div style={{ color: 'red' }}>Contact Number is required</div>
            )}
            {submitted && contactNumber.length < 10 && (
              <div style={{ color: 'red' }}>
                Contact Number length must be at least 10 characters long
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
                    {!error &&
                      firstName &&
                      lastName &&
                      email &&
                      password &&
                      rePassword &&
                      password === rePassword &&
                      contactNumber &&
                      onSignUpUser(
                        firstName,
                        lastName,
                        email,
                        password,
                        contactNumber
                      )}
                    {!error ? setSubmitted(true) : setSubmitted(false)}
                  </React.Fragment>
                )
              }}
              href={
                !error &&
                firstName &&
                lastName &&
                email &&
                password &&
                rePassword &&
                password === rePassword &&
                contactNumber &&
                submitted
                  ? '/'
                  : '#'
              }
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
        <br />
        <div>
          {error && <div style={{ color: 'red' }}>'Error in form fill-up'</div>}
        </div>
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
    onSignUpUser: (firstName, lastName, email, password, contactNumber) =>
      dispatch(signUp(firstName, lastName, email, password, contactNumber)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

//navigate('/')
//href={!error && submitted ? '/' : '#'}
