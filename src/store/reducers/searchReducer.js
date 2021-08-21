const initState = '';
export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ARAMA_YAP':
      return action.payload;

    default:
      return state;
  }
};
