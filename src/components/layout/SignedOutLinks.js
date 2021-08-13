import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutlinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutlinks;
