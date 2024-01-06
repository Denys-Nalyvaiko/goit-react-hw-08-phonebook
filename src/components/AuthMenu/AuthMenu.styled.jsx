import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: #f6d9b1;

  &.active {
    color: #eca541;
  }
`;
