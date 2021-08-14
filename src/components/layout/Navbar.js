import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-12 shadow">
      <div className="flex mx-4 ">
        <div className="font-bold text-xl">
          <Link to="/">NIGHTLIFE</Link>
        </div>
      </div>

      <div className="flex mx-4 ">
        <div>
          <Link to="/create">Add list</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
