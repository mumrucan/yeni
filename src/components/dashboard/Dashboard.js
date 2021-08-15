import React from 'react';
import { connect } from 'react-redux';
import ProjectList from '../projects/ProjectList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Dashboard = (props) => {
  const { projects, auth } = props;

  //if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="flex justify-center">
      <ProjectList projects={projects} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.deneme,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'deneme', orderBy: ['createdAt', 'desc'] }])
)(Dashboard);
