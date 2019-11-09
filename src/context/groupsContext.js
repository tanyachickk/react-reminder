import React, { createContext, useContext } from 'react';
import { useGroups } from '../hooks';

export const GroupsContext = createContext();
export const GroupsProvider = ({ children }) => {
  const { groups, setGroups } = useGroups();

  return <GroupsContext.Provider value={{ groups, setGroups }}>{children}</GroupsContext.Provider>;
};

export const useGroupsValue = () => useContext(GroupsContext);
