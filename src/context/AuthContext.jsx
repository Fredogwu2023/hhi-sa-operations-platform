import { createContext, useContext, useState } from "react";

import AuthService from "../services/AuthService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(
    AuthService.getCurrentUser()
  );

  function login(username, password) {

    const result =
      AuthService.login(username, password);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  }

  function logout() {

    AuthService.logout();

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {
  return useContext(AuthContext);
}