export const ACTIONS = {
  FETCH_TITLE: 'FETCH_TITLE',
  SET_PAGE: 'SET_PAGE',
};

const initialState = {
  title: 'My App2',
  page: 'store',
  description: 'description',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case ACTIONS.SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return { ...state };
  }
};

export const setPage = (page) => ({
  type: ACTIONS.SET_PAGE,
  page,
});
export const setTitle = () => ({
  type: ACTIONS.FETCH_TITLE,
});
export const fetchTitle = () => (dispatch, getState, api) => {
};
