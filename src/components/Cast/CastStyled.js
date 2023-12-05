import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
  list-style: none;
`;

export const ItemCast = styled.li`
  background: ${p => p.theme.colors.textLink};
  font-weight: 500;
  width: 200px;
  overflow: hidden;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;

export const PhotoCast = styled.img`
  overflow: hidden;
  width: 200px;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
`;

export const InfoContainerCast = styled.div`
  padding: ${p => p.theme.spacing(2)};
`;

export const NameCast = styled.p`
  font-size: ${p => p.theme.fontSize.fs20};
  color: ${p => p.theme.colors.textItem};
`;

export const CharacterCast = styled.p`
  font-size: ${p => p.theme.fontSize.fs14};
  color: ${p => p.theme.colors.textItem};
`;
