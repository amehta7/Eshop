const initialState = {
  products: [],
  categories: [],
  filter: null,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS': {
      return {
        ...state,
        products: action.products,
      }
    }

    case 'GET_CATEGORIES_SUCCESS': {
      return {
        ...state,
        categories: action.categories,
      }
    }

    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.filter,
      }
    }
    case 'CLEAR_FILTER': {
      return {
        ...state,
        filter: null,
      }
    }

    case 'ADD_PRODUCT_SUCCESS': {
      return {
        ...state,
        products: [action.products, ...state.products],
      }
    }

    case 'UPDATE_PRODUCT_SUCCESS': {
      return {
        ...state,
        // products: [action.products, ...state.products],
        products: [
          ...state.products.filter((product) => {
            if (product._id === action.products._id) {
              return {
                ...product,
                ...action.products,
              }
            }
            return product
          }),
        ],
      }
    }

    case 'DELETE_PRODUCTS_SUCCESS': {
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product._id !== action.products._id
          ),
        ],
      }
    }

    default: {
      return state
    }
  }
}

export default products
