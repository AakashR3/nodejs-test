// src/components/UserList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Productlistdesign from '../../ProductListDesign';
import { fetchUsersRequest } from '../actions/userActions';
                                                                                             
const UserList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

console.log(users, "Data")
  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", columnGap: 50, rowGap: 40, padding: 30}}>
    {users.map((productlist) => (

      <Productlistdesign  key={productlist.id}
              url={productlist.url}
              name={productlist.name}
              stock={productlist.stock}/>
            ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
