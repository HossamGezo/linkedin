import type {ActionProps, InitialStateProps} from "../../types/reduxTypes";
import {SET_USER} from "../actions/actionTypes";

const initialState: InitialStateProps = {
    user: null,
};

const userReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
