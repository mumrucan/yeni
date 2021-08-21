const initState = '';
export const searchResultReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ARAMA_KAYDET':
      return action.payload;

    default:
      return state;
  }
};
