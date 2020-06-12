import React, { useContext, useReducer } from "react";
import { IUser } from "../index";

export enum ContextActions {
  FETCH_USER = "FETCH_USER"
}

export interface IState {
  user: IUser;
}

export interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  user: {
    name: "Diego Augusto",
    email: "professor.diegosilva@gmail.com",
    permission: "Admin",
    lng: "pt-BR",
    active: true
  }
};

export const Store = React.createContext<IState>(initialState);

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ContextActions.FETCH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
