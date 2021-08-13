const initState = {
  projects: [
    { id: '1', title: 'xxx', content: 'sadad' },
    { id: '2', title: 'xxx', content: 'sadad' },
    { id: '3', title: 'xxx', content: 'sadad' },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Create Project Eror', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
