import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Projects } from '../Projects';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { useTheme } from '../../context/themeContext';
import { Container } from './Sidebar.styled';

const Sidebar = ({ theme }) => {
  const themeToggle = useTheme();
  const { setSelectedProject } = useSelectedProjectValue;
  const [active, setActive] = useState('INBOX');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <Container>
      <ul className="sidebar__generic">
        <li>
          <FaInbox />
          <span>Inbox</span>
        </li>
        <li>
          <FaRegCalendar />
          <span>Today</span>
        </li>
        <li>
          <FaRegCalendarAlt />
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
    </Container>
  );
};

export default withTheme(Sidebar);
