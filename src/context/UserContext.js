import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const UserContext = createContext({ user: null });
export const UserProvider = ({ children }) => {
  const [{ user, isInitialized }] = useAuth();

  return (
    <UserContext.Provider value={{ user, isInitialized }}>
      {children}
    </UserContext.Provider>
  );
};

export const useSession = () => useContext(UserContext);
