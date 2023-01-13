const bcrypt = require('bcrypt')
const { User, validateUser } = require('./../models/user')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const { AUTH_TOKEN, ADMIN } = require('../constants')

async function signIn(req, res) {
  const { email, password } = req.body

  let user = await User.findOne({ email })

  if (!user) {
    return res.status(401).send('This email has not been registered!')
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return res.status(401).send('Invalid Credentials!')
  }

  const token = jwt.sign(
    {
      _id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      isAdmin: user.role === ADMIN,
      email: user.email,
    },
    '1@3456Qw-'
  )
  res.send({
    token,
    user: {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.role,
      isAuthenticated: true,
    },
  })
  // res.header(AUTH_TOKEN, token).send({
  //   name: `${user.firstName} ${user.lastName}`,
  //   email: user.email,
  //   isAuthenticated: true,
  // })
}

async function signUp(req, res) {
  const { error } = validateUser(req.body)
  if (error) {
    return res.status(400).send(`Bad Request ${error}`)
  }

  let userFound = await User.findOne({ email: req.body.email })

  if (userFound) {
    return res
      .status(400)
      .send('Try any other email, this email is already registered!')
  }

  let userPhone = await User.findOne({ contactNumber: req.body.contactNumber })

  if (userPhone) {
    return res.status(400).send('Number already exists')
  }

  try {
    const salt = await bcrypt.genSalt(10)
    const newUser = new User({
      ...req.body,
      password: await bcrypt.hash(req.body.password, salt),
    })
    const user = await newUser.save()

    res.send(user)
    // res.send(_.pick(response, ['firstName', 'lastName', 'email', '_id']))
    // res.status(200).json({ msg: 'success msg' })
  } catch (ex) {
    res.status(400).send(ex.message)
  }
}

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, '1@3456Qw-', (error) => {
      if (error) return reject()
      return resolve({ success: true })
    })
  })

async function verify(req, res) {
  try {
    const { token } = req.body
    // verify the token
    const user = jwt.decode(token)
    const findUser = await User.findOne({ email: user.email })
    if (!findUser) {
      return new Response(401, { error: 'Unauthorized' })
    }
    // Verify Token and resolve
    await verifyToken(token)
    res.json({ status: true })
  } catch (error) {
    res.status(403).json(error)
  }
}

module.exports = {
  signUp,
  signIn,
  verify,
}
