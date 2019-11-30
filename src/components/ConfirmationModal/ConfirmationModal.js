import React from "react";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { ActionButton } from "../ActionButton";
import {
  Content,
  Body,
  Title,
  Text,
  Actions
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
          <ActionButton onClick={onCancel}>
            {t("confirmationCancel")}
          </ActionButton>
          <ActionButton onClick={onConfirm}>{t(confirmText)}</ActionButton>
        </Actions>
      </Content>
    </Modal>
  );
};

export default withTheme(ConfirmationModal);
