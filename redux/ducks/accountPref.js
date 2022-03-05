export const LIGHT_MODE = "light_mode";
export const DARK_MODE = "dark_mode";
export const UPLOAD_PIC = "upload_pic";
export const DELETE_PIC = "delete_pic";
export const CHANGE_MODE = "change_mode";

const initialState = {
  isDark: false,
  profilePicture: null,
};

export function lightModeAction() {
  return {
    type: LIGHT_MODE,
  };
}
export function darkModeAction() {
  return {
    type: DARK_MODE,
  };
}

export function uploadPicAction() {
  return { type: UPLOAD_PIC };
}

export function deletePicAction() {
  return { type: DELETE_PIC };
}

export default function accountPrefReducer(state = initialState, action) {
  switch (action.type) {
    case LIGHT_MODE:
      return { ...state, isDark: false };
    case DARK_MODE:
      return { ...state, isDark: true };
    case UPLOAD_PIC:
      return { ...state, profilePicture: action.payload };
    case DELETE_PIC:
      return { ...state, profilePicture: null };
    default:
      return state;
  }
}
