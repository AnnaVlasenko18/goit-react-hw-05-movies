import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled('header')`
  width: 100%;
  background: ${p => p.theme.colors.textItem};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const StyledNav = styled('nav')`
  max-width: 1440px;
  font-weight: 800;
  font-size: ${p => p.theme.fontSize.fs24};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${p => p.theme.colors.textLink};
  text-decoration: none;
  margin-right: ${p => p.theme.spacing(12)};

  &.active {
    color: ${p => p.theme.colors.active};
    text-decoration: underline;
  }
`;

export const ContentHeader = styled.div`
  margin-top: ${p => p.theme.spacing(20)};
`;
