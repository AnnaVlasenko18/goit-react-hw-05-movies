import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerDetailsPage = styled.div`
  height: 100%;
  padding: ${p => p.theme.spacing(6)};
`;

export const LinkDetailsPage = styled(Link)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSize.fs20};
  color: ${p => p.theme.colors.textLink};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${p => p.theme.spacing(6)};
  padding-left: ${p => p.theme.spacing(4)};

  &:hover {
    text-decoration: underline;
  }
`;

export const TextDetailsPage = styled.p`
  margin-top: ${p => p.theme.spacing(10)};
  font-weight: 700;
  color: ${p => p.theme.colors.active};
  font-size: ${p => p.theme.fontSize.fs24};
  line-height: 1.45;
`;

export const ListDetailsPage = styled.ul`
  list-style: none;
`;

export const BackLinkDetailsPage = styled(Link)`
  text-decoration: none;
  display: block;
  margin: ${p => p.theme.spacing(10)};
  text-align: center;
  justify-content: flex-start;
  font-weight: 600;
  color: ${p => p.theme.colors.active};
  font-size: ${p => p.theme.fontSize.fs20};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.active};
    text-decoration: underline;
  }
`;
