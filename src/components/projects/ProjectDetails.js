import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="flex flex-col justify-center  ">
        <div className="flex flex-wrap justify-center">{project.title}</div>
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
      orderBy: ['createdAt', 'desc'],
    },
  ])
)(ProjectDetails);
