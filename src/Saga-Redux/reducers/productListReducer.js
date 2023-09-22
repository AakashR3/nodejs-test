
const initialState = {
  productlists: [],
  loading: false,
  error: null,
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTLIST_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PRODUCTLIST_SUCCESS':
      return { ...state, productlists: action.payload, loading: false };
    case 'FETCH_PRODUCTLIST_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productListReducer;
