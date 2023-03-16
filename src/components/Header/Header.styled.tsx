import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: var(--gnbHeight);
  padding: 20px;
  background-color: var(--background-color-primary);
  border-radius: 0 0 30px 30px;
  box-shadow: inset 0 -2px 0 #e8eaed;
  font-size: 1.8rem;
  color: var(--gnb-font-color);
  svg {
    color: var(--gnb-icon-color);
  }
`;

export const Image = styled.div`
  overflow: hidden;
  height: 75px;
  width: 75px;
  border-radius: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
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
`;
