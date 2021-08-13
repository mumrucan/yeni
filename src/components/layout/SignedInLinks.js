import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInlinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  );
};

export default SignedInlinks;
