import React from 'react';
import { withTheme } from 'styled-components';
import { Text } from './Logo.styled';

const Logo = ({ theme }) => {
  return <Text>React Reminders</Text>;
};

export default withTheme(Logo);
