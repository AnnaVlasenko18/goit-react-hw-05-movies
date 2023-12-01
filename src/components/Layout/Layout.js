import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlogalStyle';
import { StyledNavLink, StyledHeader, StyledNav } from './LayoutStyle';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </StyledHeader>

      <Outlet />

      <GlobalStyle />
    </>
  );
};
