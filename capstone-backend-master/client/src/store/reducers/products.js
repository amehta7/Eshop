import { v4 as uuid } from 'uuid'

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
      // let newProduct = {
      //   _id: uuid(),
      //   name: action.products.name,
      //   category: action.products.category,
      //   manufacturer: action.products.manufacturer,
      //   price: action.products.price,
      //   availableItems: action.products.availableItems,
      //   imageURL: action.products.imageURL,
      //   description: action.products.description,
      // }
      return {
        ...state,
        products: [action.products, ...state.products],
      }
    }

    case 'DELETE_PRODUCTS_SUCCESS': {
      return {
        ...state,
        // products: [
        //   ...state.products.filter((product) => product._id !== action._id),
        // ],
        products: action.products,
      }
    }

    default: {
      return state
    }
  }
}

export default products
