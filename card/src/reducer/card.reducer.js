import * as Action from "../action/card.action";
const cardReducer = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.type) {
    case Action.CARD_REQUESTING:
      return Object.assign({}, state, { loading: true, status: action.status });
    case Action.CARD_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userData: action.userData,
        status: action.status
      });
    case Action.CARD_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });
  }
};
export default cardReducer;
