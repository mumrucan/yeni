import React, { useState } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { CreateSection } from './CreateSection';
import { Redirect } from 'react-router';

const CreateProject = (project) => {
  const [state, setState] = useState({
    title: '',
    desc: '',
    img: '',
    city: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    project.createProject(state);
    project.history.push('/');
  };

  const { auth } = project;
  if (!auth.uid) return <Redirect to="/" />;

  return (
    <CreateSection handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.deneme,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
