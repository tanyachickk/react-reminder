import React from 'react';
import { MainLayout } from './components/MainLayout';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainView } from './components/MainView';
import { MyThemeProvider } from './context/themeContext';
import { SelectedProjectProvider, ProjectsProvider } from './context';
import './App.css';

export const App = () => (
  <MyThemeProvider>
    <SelectedProjectProvider>
      <ProjectsProvider>
        <MainLayout header={<Header />} sidebar={<Sidebar />} content={<MainView />} />
      </ProjectsProvider>
    </SelectedProjectProvider>
  </MyThemeProvider>
);

export default App;
