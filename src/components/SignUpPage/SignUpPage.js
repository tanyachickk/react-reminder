import React, { useState } from "react";
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
import { useAuth } from "../../hooks/useAuth";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, { signUp }] = useAuth();

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
        <Title>Sign up to Reminders</Title>
        <InputContainer>
          <BaseInput
            type="text"
            placeholder="Full name"
            required={true}
            value={name}
            onChange={value => setName(value)}
          />
        </InputContainer>
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
            Sign up
          </ActionButton>
        </ButtonContainer>
        <Divider src={DividerImage}></Divider>
        <SignInInfo>
          <SignInQuestion>Have an account?</SignInQuestion>
          <SignInLink to="/sign-in">Sign in</SignInLink>
        </SignInInfo>
      </Form>
    </LoginPage>
  );
};
