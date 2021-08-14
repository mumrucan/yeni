import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutlinks = () => {
  return (
    <div className="flex items-center">
      <div className="p-2">
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <div className="p-2">
        <NavLink to="/signup">Login</NavLink>
      </div>
    </div>
  );
};

export default SignedOutlinks;
