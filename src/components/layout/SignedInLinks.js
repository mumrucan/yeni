import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInlinks = () => {
  return (
    <div className="flex flex-row items-center ">
      <div className="p-2">
        <NavLink to="/create">New Events</NavLink>
      </div>

      <div className="p-2">
        <NavLink to="/">Logout</NavLink>
      </div>
    </div>
  );
};

export default SignedInlinks;
