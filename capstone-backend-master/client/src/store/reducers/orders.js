const initialState = {
  order: {},
  quantity: 1,
}

const orders = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        order: action.order,
        quantity: action.quantity,
      }
    }

    case 'CONFIRM_ORDER_SUCCESS': {
      return {
        order: action.order,
        quantity: action.quantity,
      }
    }
    default: {
      return state
    }
  }
}

export default orders
