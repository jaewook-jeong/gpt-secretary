import { BREAK_POINT } from '@/constants';
import { mediaQuery } from '@/styles/mediaQuery';
import styled from '@emotion/styled';

export const Layout = styled.div`
  width: ${BREAK_POINT}px;
  height: 100%;
  margin: 0 auto;
  ${mediaQuery(BREAK_POINT)} {
    width: 100%;
  }
`;

