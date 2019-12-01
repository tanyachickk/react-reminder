import React from "react";
import { withTheme } from "styled-components";
import { FaUser } from "react-icons/fa";
import { Circle, Initials } from "./UserAvatar.styles";

const generateInitials = name =>
  name
    ? name
        .split(" ")
        .map(word => (word ? word.charAt(0).toUpperCase() : ""))
        .join("")
    : "";

const UserAvatar = ({ size = 48, name }) => {
  const initials = generateInitials(name);
  return (
    <Circle size={size}>
      {!!initials ? <Initials>{initials}</Initials> : <FaUser />}
    </Circle>
  );
};

export default withTheme(UserAvatar);
