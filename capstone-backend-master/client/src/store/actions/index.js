const baseURL = 'http://localhost:3002/api/v1'

export const fetchProducts = () => (dispatch) =>
  fetch(`${baseURL}/products`)
    .then((res) => res.json())
    .then((products) => {
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', products })
    })
    .catch(() =>
      dispatch({
        type: 'GET_PRODUCTS_FAILURE',
      })
    )

export const setFilter = (category) => {
  return {
    type: 'SET_FILTER',
    filter: category,
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER',
  }
}

export const fetchCategories = () => (dispatch) =>
  fetch(`${baseURL}/products/categories`)
    .then((res) => res.json())
    .then((categories) =>
      dispatch({ type: 'GET_CATEGORIES_SUCCESS', categories })
    )
    .catch(() =>
      dispatch({
        type: 'GET_CATEGORIES_FAILURE',
      })
    )

export const fetchProductsByName = (query) => (dispatch) =>
  fetch(`${baseURL}/products?name=${query}`)
    .then((res) => res.json())
    .then((products) => {
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', products })
    })
    .catch(() =>
      dispatch({
        type: 'GET_PRODUCTS_FAILURE',
      })
    )
