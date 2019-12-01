import React from "react";
import { withTheme } from "styled-components";
import { Container, User } from "./ProfileInfo.styles";
import { UserAvatar } from "../UserAvatar";
import { useSession } from "../../context/UserContext";

const ProfileInfo = () => {
  const { user } = useSession();

  return (
    <Container>
      <UserAvatar size={36} name={user.displayName} />
      <User>{user.displayName || "No Name"}</User>
    </Container>
  );
};

export default withTheme(ProfileInfo);
