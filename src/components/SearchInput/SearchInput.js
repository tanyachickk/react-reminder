import React from "react";
import { withTheme } from "styled-components";
import { Input, Container, Icon } from "./SearchInput.styles";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";

const SearchInput = ({ disabled }) => {
  const { t } = useTranslation();

  return (
    <Container disabled={disabled}>
      <Input disabled={disabled} placeholder={t("searchPlaceholder")} />
      <Icon>
        <IoIosSearch />
      </Icon>
    </Container>
  );
};

export default withTheme(SearchInput);
