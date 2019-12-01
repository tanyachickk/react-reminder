import React, { useRef, useState, useEffect } from "react";
import { PoseGroup } from "react-pose";
import { withTheme } from "styled-components";
import Switch from "react-switch";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext.js";
import {
  Container,
  Overlay,
  PoseOverlay,
  PoseContent,
  LogoutButton,
  AvatarContainer,
  UsernameContainer,
  EmailContainer,
  ThemeContainer,
  NotificationsContainer,
  LanguageContainer
} from "./UserProfile.styles";
import { UserAvatar } from "../UserAvatar";
import { TextInput } from "../TextInput";
import { blueColor, grayColor } from "../../constants/theme.js";
import { useSession } from "../../context/UserContext.js";
import { LanguageControl } from "../LanguageControl/index.js";

const UserProfile = ({ theme, isVisible, onClose }) => {
  const { t } = useTranslation();
  const themeToggle = useTheme();
  const overlayRef = useRef();
  const { user, signOut, updateUsername } = useSession();
  const [currentName, setCurrentName] = useState("");
  const [isEditName, setIsEditName] = useState(false);

  useEffect(() => {
    setCurrentName((user && user.displayName) || "");
  }, [user]);

  const onOverlayClick = e => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const onChangeUsername = value => {
    setIsEditName(true);
    setCurrentName(value);
  };

  const saveUsername = () => {
    if (user && currentName) {
      updateUsername(currentName);
    }
    setIsEditName(false);
  };

  return (
    <PoseGroup>
      {isVisible && (
        <PoseOverlay key="overlay">
          <Overlay ref={overlayRef} onClick={onOverlayClick}>
            <PoseContent key="content">
              <Container>
                <AvatarContainer>
                  <UserAvatar size={84} name={user.displayName}></UserAvatar>
                </AvatarContainer>
                <UsernameContainer>
                  <TextInput
                    value={currentName}
                    isEditMode={isEditName}
                    onChange={onChangeUsername}
                    onEnter={saveUsername}
                    onEscape={saveUsername}
                    onClickAway={saveUsername}
                  />
                </UsernameContainer>
                <EmailContainer>{user.email || ""}</EmailContainer>
                <LanguageContainer>
                  {t("languageLabel")}
                  <LanguageControl />
                </LanguageContainer>
                <ThemeContainer>
                  {t("darkThemeLabel")}
                  <Switch
                    checked={theme.mode === "dark"}
                    onColor={blueColor}
                    offColor={grayColor}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    activeBoxShadow=""
                    height={18}
                    width={36}
                    onChange={() => themeToggle.toggle()}
                  />
                </ThemeContainer>
                <NotificationsContainer>
                  {t("pushNotificationsLabel")}
                  <Switch
                    checked={false}
                    onColor={blueColor}
                    offColor={grayColor}
                    activeBoxShadow=""
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={18}
                    width={36}
                    onChange={() => themeToggle.toggle()}
                  />
                </NotificationsContainer>
                <LogoutButton onClick={signOut}>
                  {t("logoutButton")}
                </LogoutButton>
              </Container>
            </PoseContent>
          </Overlay>
        </PoseOverlay>
      )}
    </PoseGroup>
  );
};

export default withTheme(UserProfile);
