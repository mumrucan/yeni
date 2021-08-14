import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div>
        <div>
          <p>{project.title}</p>
        </div>

        <div>
          <p>{project.desc}</p>
        </div>

        <div>
          <p>{project.city}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.deneme;
  const project = projects ? projects[id] : null;
  console.log(ownProps);
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'deneme',
    },
  ])
)(ProjectDetails);
