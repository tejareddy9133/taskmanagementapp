import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const Login = () => {
    setIsAuth(true);
  };
  const Logout = () => {
    setIsAuth(false);
  };

  const UserRegister = (userdetails) => {};

  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout, UserRegister }}>
      {children}
    </AuthContext.Provider>
  );
}
