import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../../firebase/firebase";
import * as actions from "./actionCreators";
import type {Dispatch} from "redux";
import type {ActionProps} from "../../types/reduxTypes";

export const signIn = () => {
  return (dispatch: Dispatch<ActionProps>) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload));
      })
      .catch((error) => alert(error.message));
  };
};
