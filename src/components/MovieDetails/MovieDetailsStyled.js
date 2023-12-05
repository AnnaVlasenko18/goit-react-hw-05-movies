import styled from 'styled-components';

export const ContainerDetails = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
`;

export const PhotoDetails = styled.img`
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
  min-width: 200px;
`;

export const TitleDetails = styled.h1`
  font-size: ${p => p.theme.fontSize.fs28};
  font-weight: 800;
  margin-bottom: ${p => p.theme.spacing(8)};
  color: ${p => p.theme.colors.textLink};
`;

export const SecondaryTitelDetails = styled.h3`
  margin-bottom: ${p => p.theme.spacing(4)};
  color: ${p => p.theme.colors.textLink};
`;

export const TextDetails = styled.p`
  max-width: 500px;
  color: ${p => p.theme.colors.textLink};
`;
export const SpanDetails = styled.span`
  color: ${p => p.theme.colors.textLink};
`;
