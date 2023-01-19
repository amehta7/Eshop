const jwt = require('jsonwebtoken')
const { AUTH_TOKEN } = require('../constants')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  //console.log(authHeader)

  if (!authHeader) {
    return res.status(401).send('Please Login first to access this endpoint!')
  }

  const token = authHeader.split(' ')[1]

  try {
    const decodedToken = await jwt.verify(token, '1@3456Qw-')
    req.user = decodedToken
    //console.log(decodedToken)
    next()
  } catch (ex) {
    res.status(401).send('Unauthorized User')
  }
}

module.exports = auth
