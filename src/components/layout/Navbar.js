import React from 'react';
import SignedInlinks from './SignedInLinks';
import SignedOutlinks from './SignedOutLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/"> Anasayfa</Link>
      <SignedInlinks />
      <SignedOutlinks />
    </div>
  );
};

export default Navbar;
