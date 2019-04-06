import * as ACTION_TYPES from "../constants/action-types";

const initialState = {
  token: undefined,
  isAuthenticating: false,
  error: undefined,
  isFailed: false,
  kt: 1
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTION_TYPES.USER_LOGIN_REQUESTED:
      return {
        ...state,
        isAuthenticating: true,
        isFailed: false
      };
    case ACTION_TYPES.USER_LOGIN_SUCCESS:
      console.log(payload);
      return {
        token: payload.data.token,
        isAuthenticating: false,
        isFailed: false
      };
    case ACTION_TYPES.USER_LOGIN_FAILED:
      console.log(action);
      return {
        error: error.response.data.message,
        isAuthenticating: false,
        isFailed: true
      };
    case ACTION_TYPES.USER_LOGOUT_REQUESTED:
      return {
        ...initialState
      };
    case ACTION_TYPES.Bangthongke:
      return {
        kt: 1
      };
    case ACTION_TYPES.Hanghoa:
      return {
        kt: 2
      };
    case ACTION_TYPES.Nguoidung:
      return {
        kt: 0
      };
    default:
      return state;
  }
};