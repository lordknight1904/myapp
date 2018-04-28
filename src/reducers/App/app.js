
export const ACTIONS = {
  FETCH_TITLE: 'FETCH_TITLE',
  SET_SIDE: 'SET_SIDE',
};

const initialState = {
  title: 'My App2',
  side: 'store',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case ACTIONS.SET_SIDE:
      return {
        ...state,
        side: action.side,
      };
    default:
      return { ...state };
  }
};

export const setPage = (side) => ({
  type: ACTIONS.SET_SIDE,
  side
});
export const setTitle = () => ({
  type: ACTIONS.FETCH_TITLE,
});
export const fetchTitle = () => (dispatch, getState, api) => {
};
