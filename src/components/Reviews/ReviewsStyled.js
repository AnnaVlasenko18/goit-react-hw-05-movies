import { styled } from 'styled-components';

export const ListReviews = styled.ul`
  list-style: none;
`;

export const ItemReviews = styled.li`
  margin-bottom: 24px;
  color: ${p => p.theme.colors.textLink};
`;

export const AuthorReviews = styled.h3`
  margin-bottom: 16px;
  color: ${p => p.theme.colors.textLink};
`;

export const TextReviews = styled.p`
  color: ${p => p.theme.colors.textLink};
`;
