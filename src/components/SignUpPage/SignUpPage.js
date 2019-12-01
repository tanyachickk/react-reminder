import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginPage } from "../LoginPage";
import {
  Form,
  Title,
  InputContainer,
  Divider,
  ButtonContainer,
  SignInInfo,
  SignInQuestion,
  SignInLink
} from "./SignUpPage.styles";
import { BaseInput } from "../BaseInput";
import * as DividerImage from "../../assets/images/HR_gradient_dark.png";
import { ActionButton } from "../ActionButton";
import { useSession } from "../../context/UserContext";

export const SignUpPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useSession();

  const handleSubmit = async e => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      await signUp({ name, email, password });
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginPage loading={isLoading}>
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>{t("signUpTitle")} Reminders</Title>
        <InputContainer>
          <BaseInput
            type="text"
            placeholder={t("fullNamePlaceholder")}
            required={true}
            value={name}
            onChange={value => setName(value)}
          />
        </InputContainer>
        <InputContainer>
          <BaseInput
            type="email"
            placeholder={t("emailPlaceholder")}
            required={true}
            value={email}
            onChange={value => setEmail(value)}
          />
        </InputContainer>
        <InputContainer>
          <BaseInput
            type="password"
            placeholder={t("passwordPlaceholder")}
            required={true}
            value={password}
            onChange={value => setPassword(value)}
          />
        </InputContainer>
        <ButtonContainer>
          <ActionButton color="primary" type="submit">
            {t("signUpButton")}
          </ActionButton>
        </ButtonContainer>
        <Divider src={DividerImage}></Divider>
        <SignInInfo>
          <SignInQuestion>{t("haveAnAcoountQuestion")}</SignInQuestion>
          <SignInLink to="/sign-in">{t("signInButton")}</SignInLink>
        </SignInInfo>
      </Form>
    </LoginPage>
  );
};
