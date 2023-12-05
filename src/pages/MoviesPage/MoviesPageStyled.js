import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormMovies = styled('form')`
  margin: ${p => p.theme.spacing(10)};
  text-align: center;
  position: relative;
  margin-top: ${p => p.theme.spacing(30)};
`;

export const InputMovies = styled('input')`
  width: 300px;
  font-size: ${p => p.theme.fontSize.fs14};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  line-height: ${p => p.theme.spacing(6)};
  color: #24292e;
  vertical-align: middle;
  background-color: ${p => p.theme.colors.textLink};
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #a2a2a2;
  border-radius: 6px;
  outline: none;
  box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;

  &:focus {
    border-color: #0366d6;
    outline: none;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;

export const ContainerMovies = styled('div')`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.spacing(6)};
  border-bottom: solid #a2a2a2 1px;
`;

export const ListMovies = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
  list-style: none;
`;

export const ItemMovies = styled('li')`
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

export const LinkMovies = styled(Link)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSize.fs20};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const InfoMovies = styled('div')`
  padding: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.textItem};
  font-size: ${p => p.theme.fontSize.fs20};
`;

export const TextSecondary = styled('p')`
  margin: ${p => p.theme.spacing()};
  text-align: center;
  font-weight: 700;
`;
