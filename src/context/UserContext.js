import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const UserContext = createContext({ user: null });
export const UserProvider = ({ children }) => {
  const {
    user,
    isInitialized,
    signIn,
    signUp,
    signOut,
    updateUsername
  } = useAuth();

  return (
    <UserContext.Provider
      value={{ user, isInitialized, signIn, signUp, signOut, updateUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useSession = () => useContext(UserContext);
