import type { UserCredential } from "firebase/auth";
import * as actions from "./actionTypes";

export const setUser = (user: UserCredential) => {
  return {
    type: actions.SET_USER,
    payload: user,
  };
};
