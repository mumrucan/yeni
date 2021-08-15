import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <header className="flex items-center justify-between h-12 shadow">
      <div className="flex mx-4 ">
        <div className="font-bold font-roboto text-_3xl">
          <Link to="/">NIGHTLIFE</Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between h-12 font-roboto">
        {links}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
