import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainLayout } from "../MainLayout";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MyThemeProvider } from "../../context/ThemeContext";
import { SelectedGroupProvider } from "../../context/SelectedGroupContext";
import { MainPage } from "../MainPage";
import { UserProfile } from "../UserProfile";
import { useSession } from "../../context/UserContext";

const InnerPage = () => {
  const history = useHistory();
  const { user, isInitialized } = useSession();
  const [isShowProfile, setIsShowProfile] = useState(false);

  useEffect(() => {
    if (isInitialized && !user) {
      history.replace({ pathname: "/login" });
    }
  });

  return isInitialized && !!user ? (
    <SelectedGroupProvider>
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
    </SelectedGroupProvider>
  ) : null;
};

export default InnerPage;
