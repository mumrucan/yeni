export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('deneme')
      .add({
        ...project,
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          err,
        });
      });
  };
};
