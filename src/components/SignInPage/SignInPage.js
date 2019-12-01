import React, { useState } from "react";
import { LoginPage } from "../LoginPage";
import {
  Form,
  Title,
  InputContainer,
  Divider,
  ButtonContainer,
  SignUpInfo,
  SignUpQuestion,
  SignUpLink
} from "./SignInPage.styles";
import { BaseInput } from "../BaseInput";
import * as DividerImage from "../../assets/images/HR_gradient_dark.png";
import { ActionButton } from "../ActionButton";
import { useSession } from "../../context/UserContext";

export const SignInPage = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useSession();

  const handleSubmit = async e => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      await signIn({ email, password });
    } catch (error) {
      alert(error);
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginPage loading={isLoading}>
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>Sign in to Reminders</Title>
        <InputContainer>
          <BaseInput
            type="email"
            placeholder="E-mail"
            required={true}
            value={email}
            onChange={value => setEmail(value)}
          />
        </InputContainer>
        <InputContainer>
          <BaseInput
            type="password"
            placeholder="Password"
            required={true}
            value={password}
            onChange={value => setPassword(value)}
          />
        </InputContainer>
        <ButtonContainer>
          <ActionButton color="primary" type="submit">
            Sign in
          </ActionButton>
        </ButtonContainer>
        <Divider src={DividerImage}></Divider>
        <SignUpInfo>
          <SignUpQuestion>Don't have an account?</SignUpQuestion>
          <SignUpLink to="/sign-up">Sign up</SignUpLink>
        </SignUpInfo>
      </Form>
    </LoginPage>
  );
};
