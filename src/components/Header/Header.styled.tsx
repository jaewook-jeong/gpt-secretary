import { TABLET_BREAK_POINT } from '@/constants';
import { mediaQuery } from '@/styles/mediaQuery';
import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--gnbHeight);
  padding: 20px;
  font-size: 1.8rem;
  color: var(--gnb-font-color);
  border-radius: 0 0 20px 20px;
  box-shadow: inset 0 -2px 0 var(--box-shadow-color);
  svg {
    color: var(--gnb-icon-color);
  }
  ${mediaQuery(TABLET_BREAK_POINT)} {
    font-size: 1.5rem;
    padding: 10px 15px;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  height: 75px;
  width: 75px;
  border-radius: 100%;

  ${mediaQuery(TABLET_BREAK_POINT)} {
    display: none;
  }
`;

export const MobileImage = styled(Image)`
  display: none;
  height: 50px;
  width: 50px;
  ${mediaQuery(TABLET_BREAK_POINT)} {
    display: initial;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;

  ${mediaQuery(TABLET_BREAK_POINT)} {
    column-gap: 10px;
  }
`;

export const EnglishName = styled.span`
  ${mediaQuery(TABLET_BREAK_POINT)} {
    display: none;
  }
`;

export const OnlineDot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.3rem;
  color: var(--point-color-0);

  svg {
    color: var(--point-color-0);
  }
`;

export const IconWapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  ${mediaQuery(TABLET_BREAK_POINT)} {
    column-gap: 15px;
  }
`;
