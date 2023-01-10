const initialState = {
  user: JSON.parse(window.localStorage.getItem('user')),
}

const users = (state = initialState, action) => {
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

    case 'INIT_SUCCESS': {
      return {}
    }

    case 'SIGNOUT_SUCCESS': {
      return {}
    }

    default: {
      return state
    }
  }
}

export default users
