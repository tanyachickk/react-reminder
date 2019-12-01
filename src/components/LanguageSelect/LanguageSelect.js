import React, { useState } from "react";
import { withTheme } from "styled-components";
import { PoseGroup } from "react-pose";
import { ReactPageClick } from "react-page-click";
import { IoIosArrowDown } from "react-icons/io";
import { languages as languagesMap } from "../../constants/values";
import ImageEN from "../../assets/images/EN.svg";
import ImageRU from "../../assets/images/RU.svg";
import {
  Container,
  Body,
  Dropdown,
  List,
  Item,
  Flag,
  Country,
  ArrowContainer
} from "./LanguageSelect.styles";

const flagsByCode = {
  EN: ImageEN,
  RU: ImageRU
};

const LanguageSelect = ({ currentLanguage, languages, onSelect }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  return (
    <ReactPageClick notify={() => setIsShowDropdown(false)}>
      <Container onClick={() => setIsShowDropdown(!isShowDropdown)}>
        <Body>
          <Flag src={flagsByCode[currentLanguage]}></Flag>
          <Country>{languagesMap[currentLanguage]}</Country>
          <ArrowContainer isOpen={isShowDropdown}>
            <IoIosArrowDown />
          </ArrowContainer>
        </Body>
        <PoseGroup>
          {isShowDropdown && (
            <Dropdown key="dropdown">
              <List>
                {languages.map(code => (
                  <Item key={code} onClick={() => onSelect(code)}>
                    <Flag src={flagsByCode[code]}></Flag>
                    <Country>{languagesMap[code]}</Country>
                  </Item>
                ))}
              </List>
            </Dropdown>
          )}
        </PoseGroup>
      </Container>
    </ReactPageClick>
  );
};

export default withTheme(LanguageSelect);
