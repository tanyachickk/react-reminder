import React from 'react';
import { MainLayout } from './components/MainLayout';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainView } from './components/MainView';
import { MyThemeProvider } from './context/themeContext';
import { SelectedGroupProvider, GroupsProvider } from './context';
import './App.css';

export const App = () => (
  <SelectedGroupProvider>
    <GroupsProvider>
      <MyThemeProvider>
        <MainLayout header={<Header />} sidebar={<Sidebar />} content={<MainView />} />
      </MyThemeProvider>
    </GroupsProvider>
  </SelectedGroupProvider>
);

export default App;
