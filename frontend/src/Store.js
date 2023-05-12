import { createContext, useReducer, useState, useEffect } from "react";

export const Store = createContext();
const str = JSON.parse(localStorage.getItem("userInfo"));
const str2 = JSON.parse(localStorage.getItem("lawyerInfo"));
const user_type = JSON.parse(localStorage.getItem("is_lawyer"));
const initialState = {
  userInfo: localStorage.getItem("userInfo") ? str : null,
  lawyerInfo: localStorage.getItem("lawyerInfo") ? str2 : null,
  is_lawyer: localStorage.getItem("is_lawyer")? user_type: false,
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
    case "SET_IS_LAWYER":
      return { ...state, is_lawyer: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLawyer, setIsLawyer] = useState(state.is_lawyer);

  useEffect(() => {
    localStorage.setItem("is_lawyer", JSON.stringify(isLawyer));
  }, [isLawyer]);

  const value = {
    state: { ...state, is_lawyer: isLawyer },
    dispatch,
    isLawyer,
    setIsLawyer,
  };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};