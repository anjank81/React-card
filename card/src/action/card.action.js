export function cardRequesting() {
  return {
    type: "CARD_REQUESTING",
    status: "Requesting"
  };
}
export function cardSuccess(data) {
  return {
    type: "CARD_SUCCESS",
    status: "Success",
    userData: data
  };
}
export function cardFailure(error) {
  return {
    type: "CARD_FAILURE",
    status: "Failure",
    error
  };
}
export function getCard() {
  return async (dispatch, getState) => {
    dispatch(cardRequesting());
    try {
      const result = await fetch("http://api.github.com/users");
      if (result.error) {
        throw result.error;
      }
      const resultJson = await result.json();
      return dispatch(cardSuccess(resultJson));
    } catch (e) {
      return dispatch(cardFailure(e.message));
    }
  };
}
