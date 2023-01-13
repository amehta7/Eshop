const users = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS': {
      return {
        user: action.user,
      }
    }

    case 'SIGNUP_SUCCESS': {
      return {
        user: action.user,
      }
    }

    case 'SIGNOUT_SUCCESS': {
      return {}
    }

    case 'INIT_SUCCESS': {
      return {
        user: action.user,
      }
    }

    default: {
      return state
    }
  }
}

export default users

//user: JSON.parse(window.localStorage.getItem('user')),
