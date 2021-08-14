import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <div className="m-3 flex">
      <div>
        <NavLink to="/create">Add list</NavLink>
      </div>
      <div className="mx-3">
        <NavLink onClick={props.signOut} to="/">
          Log Out
        </NavLink>
      </div>{' '}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.deneme,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
