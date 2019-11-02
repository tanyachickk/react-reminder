import React from 'react';
import { FaPalette } from 'react-icons/fa';
import { withTheme } from 'styled-components';
import { useTheme } from '../../context/themeContext';
import { Container } from './Header.styled';

const Header = ({ theme }) => {
  const themeToggle = useTheme();

  return (
    <Container>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Reminder" />
        </div>
        <div className="settings">
          <ul>
            <li>
              <button onClick={() => themeToggle.toggle()}>
                {theme.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </li>
            <li>
              <FaPalette />
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default withTheme(Header);
