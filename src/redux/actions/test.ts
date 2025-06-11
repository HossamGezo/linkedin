import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase/firebase"
import { setUser } from "./actionCreators"
import type { Dispatch } from "redux"
import type { ActionProps } from "../../types/reduxTypes"

export const singInTest = () => {
  return (dispatch: Dispatch<ActionProps>) => {
    signInWithPopup(auth, provider).then((payload) => {
      dispatch(setUser(payload))
    }).catch((error) => error.message)
  }
}