import styled from '@emotion/styled';
import { mediaQuery } from '@/styles/mediaQuery';
import { TABLET_BREAK_POINT } from '@/constants';

export const Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: auto;
  min-height: 80px;
  padding: 20px 40px;
  background-color: var(--background-color-primary);
  border-radius: 30px 30px 0 0;
  box-shadow: inset 0 2px 2px var(--box-shadow-color);

  ${mediaQuery(TABLET_BREAK_POINT)} {
    padding: 15px 20px;
  }
`;

export const ChatTextArea = styled.textarea`
  display: block;
  width: 85%;
  overflow: hidden;
  resize: none;
  height: 84px;
  min-height: 84px;
  max-height: 200px;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  border: 0;
  background-color: var(--background-color-primary);
  color: var(--text-color);
  ::placeholder {
    color: var(--text-color);
  }

  ${mediaQuery(TABLET_BREAK_POINT)} {
    height: 44px;
    min-height: 44px;
    max-height: 100px;
    font-size: 1.2rem;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--point-color-0);
  border: 0;
  cursor: pointer;
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${mediaQuery(TABLET_BREAK_POINT)} {
    width: 30px;
    height: 30px;
  }
`;