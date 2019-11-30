import styled from "styled-components";
import { Link } from "react-router-dom";

import { secondaryTextColor, accentColor } from "../../constants/theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin: 24px 0 48px;
  font-size: 18px;
`;

export const Divider = styled.img`
  width: 100%;
  height: 24px;
`;

export const SignInInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const SignInQuestion = styled.span`
  margin-right: 5px;
  color: ${secondaryTextColor};
`;

export const SignInLink = styled(Link)`
  color: ${accentColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
