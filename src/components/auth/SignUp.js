import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router';

const SignUp = (newUser) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newUser.signUp(state);
  };

  const { auth } = newUser;
  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md m-10 w-1/3 rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div className="mb-4 m-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          ></input>
        </div>
        <div className="mb-6 m-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
          ></input>
        </div>

        <div className="mb-6 m-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            Firstname
          </label>
          <input
            type="text"
            onChange={handleChange}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="firstName"
          ></input>
        </div>

        <div className="mb-6 m-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Lastname
          </label>
          <input
            type="text"
            onChange={handleChange}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="lastName"
          ></input>
        </div>

        <div className="flex items-center justify-between m-2">
          <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
