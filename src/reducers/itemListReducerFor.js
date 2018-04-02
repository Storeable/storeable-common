export const initialState = {
  isFetching: false,
  fetchingError: false,
  itemsLoaded: false,
  items: false,
};

/**
 * Reusable factory reducer to set async fetched data in a state.
 *
 * @param {Object} actionTypes
 * @returns {Function}
 */
const itemListReducerFor = ({ FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAIL }) => (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        itemsLoaded: true,
        items: action.response,
        fetchingError: initialState.fetchingError
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchingError: action.error
      };
    default:
      return state;
  }
};

export default itemListReducerFor;
