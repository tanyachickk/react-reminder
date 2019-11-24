import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { MainLayout } from "../MainLayout";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MyThemeProvider } from "../../context/themeContext";
import { SelectedGroupProvider, GroupsProvider } from "../../context";
import { MainPage } from "../MainPage";
import { UserProfile } from "../UserProfile";

const InnerPage = () => {
  const history = useHistory();
  const [{ user, isInitialized }] = useAuth();
  const [isShowProfile, setIsShowProfile] = useState(false);

  useEffect(() => {
    if (isInitialized && !user) {
      history.replace({ pathname: "/login" });
    }
  });

  return isInitialized && user ? (
    <SelectedGroupProvider>
      <GroupsProvider>
        <MyThemeProvider>
          <MainLayout
            header={<Header />}
            sidebar={<Sidebar onUserInfoClick={() => setIsShowProfile(true)} />}
            content={<MainPage />}
          />
          {isShowProfile && (
            <UserProfile onClose={() => setIsShowProfile(false)} />
          )}
        </MyThemeProvider>
      </GroupsProvider>
    </SelectedGroupProvider>
  ) : null;
};

export default InnerPage;
