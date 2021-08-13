import React, { useState } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

const CreateProject = (project) => {
  const [state, setState] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    project.createProject(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Create Project</h5>

        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="content">description</label>
          <textarea id="content" onChange={handleChange}></textarea>
        </div>
        <div>
          {' '}
          <button>xxx</button>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
