import axios from "axios";
export const CARD_REQUESTING = "CARD_REQUESTING";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const CARD_FAILURE = "CARD_FAILURE";
export function cardRequesting() {
  return {
    type: CARD_REQUESTING,
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
      axios.get("http://api.github.com/users").then(res => {
        if (res.error) {
          throw res.error;
        }
        const users = res.data;
        return dispatch(cardSuccess(users));
      });
    } catch (e) {
      return dispatch(cardFailure(e.message));
    }
  };
}
