export const LOG_IN = "log_in";
export const LOG_OUT = "log_out";

export function logInAction() {
  return { type: LOG_IN };
}
export function logOutAction() {
  return { type: LOG_OUT };
}

const initialState = {
  token: null,
};

export default function blogAuthReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case LOG_IN:
      return { ...state, token: action.payload };
    case LOG_OUT:
      return { ...state, token: null };
    default:
      return state;
  }
}
