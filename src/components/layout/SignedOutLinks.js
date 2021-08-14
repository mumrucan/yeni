import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div className="m-3 flex">
      <div>
        <NavLink to="/signup">Signup</NavLink>
      </div>
      <div className="mx-3">
        <NavLink to="/signin">Login</NavLink>
      </div>{' '}
    </div>
  );
};

export default SignedOutLinks;
