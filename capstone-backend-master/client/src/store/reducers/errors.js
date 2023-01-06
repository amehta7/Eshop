const initialState = {
  error: false,
}

const errors = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_FAILURE': {
      return {
        error: true,
      }
    }
    case 'GET_CATEGORIES_FAILURE': {
      return {
        error: true,
      }
    }
    case 'SIGNIN_FAILURE': {
      return {
        error: true,
      }
    }
    case 'SIGNUP_FAILURE': {
      return {
        error: true,
      }
    }

    case 'DELETE_PRODUCTS_FAILURE': {
      return {
        error: true,
      }
    }
    case 'GET_PRODUCTS_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'GET_CATEGORIES_SUCCESS': {
      return {
        error: false,
      }
    }
    case 'SIGNIN_SUCCESS': {
      return {
        error: false,
      }
    }

    case 'DELETE_PRODUCTS_SUCCESS': {
      return {
        error: false,
      }
    }

    default: {
      return state
    }
  }
}

export default errors
