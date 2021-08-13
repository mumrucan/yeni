import React from 'react';
import { connect } from 'react-redux';
import ProjectList from '../projects/ProjectList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Dashboard = (props) => {
  const projects = props.projects;
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { projects: state.firestore.ordered.deneme };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'deneme' }])
)(Dashboard);
