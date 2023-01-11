const initialState = {
  address: [],
  selectedAddress: {},
}

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS_SUCCESS': {
      return {
        ...state,
        address: [action.address, ...state.address],
      }
    }

    case 'GET_ADDRESS_SUCCESS': {
      return {
        ...state,
        address: action.address,
      }
    }

    case 'ADD_TO_ADDRESS': {
      return {
        ...state,
        selectedAddress: action.selectedAddress,
      }
    }

    default: {
      return state
    }
  }
}

export default addresses
