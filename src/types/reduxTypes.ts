import type { UserCredential } from "firebase/auth";

export type ActionProps = {
  type: string;
  payload?: UserCredential;
};

export type InitialStateProps = {
  user: UserCredential | null;
};

export type RootReducerProps = {
  userState: InitialStateProps;
};
