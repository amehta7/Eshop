const initialState = {
  address: [],
}

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS_SUCCESS': {
      return {
        address: [action.address, ...state.address],
      }
    }

    case 'GET_ADDRESS_SUCCESS': {
      return {
        address: action.address,
      }
    }

    default: {
      return state
    }
  }
}

export default addresses
