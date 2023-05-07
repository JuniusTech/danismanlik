import { createContext, useReducer } from "react";

export const Store = createContext();
const str = JSON.parse(localStorage.getItem("userInfo"));
const str2 = JSON.parse(localStorage.getItem("lawyerInfo"));
const initialState = {
  userInfo: localStorage.getItem("userInfo") ? str : null,
  lawyerInfo: localStorage.getItem("lawyerInfo") ? str2 : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return { ...state, userInfo: null };
    case "LAWYER_SIGNIN":
      return { ...state, lawyerInfo: action.payload };
    case "LAWYER_SIGNOUT":
      return { ...state, lawyerInfo: null };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
