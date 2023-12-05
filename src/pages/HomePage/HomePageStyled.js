import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleHome = styled('h1')`
  margin-bottom: ${p => p.theme.spacing(9)};
  margin-top: ${p => p.theme.spacing(5)};
  font-size: ${p => p.theme.fontSize.fs28};
  color: ${p => p.theme.colors.active};
  font-weight: 900;
`;

export const ContainerHome = styled('div')`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.spacing(6)};
  border-bottom: solid #a2a2a2 1px;
`;

export const ListHome = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
  list-style: none;
`;

export const ItemHome = styled('li')`
  background: ${p => p.theme.colors.textLink};
  font-weight: 500;
  width: 200px;
  overflow: hidden;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSize.fs20};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const InfoHome = styled('div')`
  padding: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.textItem};
  font-size: ${p => p.theme.fontSize.fs20};
`;
