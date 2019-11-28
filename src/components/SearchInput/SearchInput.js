import React from "react";
import { withTheme } from "styled-components";
import { Input, Container, Icon } from "./SearchInput.styled";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";

const SearchInput = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Input placeholder={t("searchPlaceholder")} />
      <Icon>
        <IoIosSearch />
      </Icon>
    </Container>
  );
};

export default withTheme(SearchInput);
