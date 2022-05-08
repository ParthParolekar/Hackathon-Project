import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./AuthReducer";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
