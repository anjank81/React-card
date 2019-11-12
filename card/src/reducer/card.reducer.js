const cardReducer = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case "CARD_REQUESTING":
      console.log("Requesting type");
      return Object.assign({}, state, { loading: true, status: action.status });
    case "CARD_SUCCESS":
      console.log("Success type");
      return Object.assign({}, state, {
        loading: false,
        userData: action.userData,
        status: action.status
      });
    case "CARD_FAILURE":
      console.log("Failure type");
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });
  }
};
export default cardReducer;
