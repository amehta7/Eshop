const initialState = {
  user: [],
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

    default: {
      return state
    }
  }
}

export default users
