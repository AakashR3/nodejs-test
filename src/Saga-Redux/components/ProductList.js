// src/components/UserList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Productlistdesign from '../../ProductListDesign';
import { fetchProductListRequest } from '../actions/productActions';
                                                                                             
const ProductList = ({ productlists, fetchProduct }) => {
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

console.log(productlists, "Data")

  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", columnGap: 50, rowGap: 40, padding: 30}}>
    {productlists.map((productlist) => (

      <Productlistdesign  key={productlist.id}
              url={productlist.url}
              name={productlist.name}
              stock={productlist.stock}/>
            ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productlists: state.productlist.productlists,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProductListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
