import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 14px 28px;
  font-size: 18px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  color: #f6d9b1;

  &.active {
    color: #eca541;
  }
`;
