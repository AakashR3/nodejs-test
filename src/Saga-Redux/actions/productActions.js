export const fetchProductListRequest = () => ({
  type: 'FETCH_PRODUCTLIST_REQUEST',
});

 export const fetchProductListSuccess = (product) => ({
  type: 'FETCH_PRODUCTLIST_SUCCESS',
  payload: product,
});

export const fetchProductListFailure = (error) => ({
  type: 'FETCH_PRODUCTLIST_FAILURE',
  payload: error,
});
