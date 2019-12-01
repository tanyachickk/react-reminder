import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainLayout } from "../MainLayout";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SelectedGroupProvider } from "../../context/SelectedGroupContext";
import { UserProfile } from "../UserProfile";
import { useSession } from "../../context/UserContext";
import { TaskList } from "../TaskList";

const InnerPage = () => {
  const history = useHistory();
  const { user, isInitialized } = useSession();
  const [isShowProfile, setIsShowProfile] = useState(false);

  useEffect(() => {
    if (isInitialized && !user) {
      history.replace({ pathname: "/sign-in" });
    }
  }, [isInitialized, user]);

  return isInitialized && !!user ? (
    <SelectedGroupProvider>
      <MainLayout
        header={<Header />}
        sidebar={<Sidebar onUserInfoClick={() => setIsShowProfile(true)} />}
        content={<TaskList />}
      />
      {isShowProfile && <UserProfile onClose={() => setIsShowProfile(false)} />}
    </SelectedGroupProvider>
  ) : null;
};

export default InnerPage;
