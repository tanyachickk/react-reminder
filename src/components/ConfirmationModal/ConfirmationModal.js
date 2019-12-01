import React from "react";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { ActionButton } from "../ActionButton";
import {
  Content,
  Body,
  Title,
  Text,
  Actions,
  ActionButtonContainer
} from "./ConfirmationModal.styles";
import { Modal } from "../Modal";

const ConfirmationModal = ({
  isVisible,
  title,
  text,
  confirmText,
  onCancel,
  onConfirm
}) => {
  const { t } = useTranslation();
  return (
    <Modal isVisible={isVisible} onCancel={onCancel}>
      <Content>
        <Body>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Body>
        <Actions>
          <ActionButtonContainer>
            <ActionButton onClick={onCancel}>
              {t("confirmationCancel")}
            </ActionButton>
          </ActionButtonContainer>
          <ActionButtonContainer>
            <ActionButton color="primary" onClick={onConfirm}>
              {t(confirmText)}
            </ActionButton>
          </ActionButtonContainer>
        </Actions>
      </Content>
    </Modal>
  );
};

export default withTheme(ConfirmationModal);
