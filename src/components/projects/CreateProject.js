import React, { useState } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { CreateSection } from './CreateSection';

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
    setState({});
    console.log(state);
  };

  return (
    <CreateSection handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
