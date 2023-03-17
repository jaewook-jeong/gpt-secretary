import styled from '@emotion/styled';

export const Wrapper = styled.section`
  flex: auto;
  padding: 30px 20px 15px 20px;
  overflow-y: auto;
  background-color: var(--background-color-secondary);

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--gnb-icon-color);
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
`;