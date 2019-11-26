import React, { createContext, useContext, useState } from 'react';

export const SelectedGroupContext = createContext();
export const SelectedGroupProvider = ({ children }) => {
  const [selectedGroup, setSelectedGroup] = useState('ALL');

  return (
    <SelectedGroupContext.Provider value={{ selectedGroup, setSelectedGroup }}>
      {children}
    </SelectedGroupContext.Provider>
  );
};

export const useSelectedGroupValue = () => useContext(SelectedGroupContext);
