import { TABLET_BREAK_POINT } from '@/constants';
import { mediaQuery } from '@/styles/mediaQuery';
import { Role } from '@/types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MessageFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MessageWrapper = styled.div<{ $role: Role }>`
  display: flex;
  flex-direction: ${({$role}) => $role === 'system' ? 'row' : 'row-reverse'};
  align-items: flex-end;
  row-gap: 5px;
  width: 100%;
`;

export const MessageBodyWrapper = styled.div<{ $role: Role }>`
  width: max-content;
  max-width: 70%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2rem;
  white-space: break-spaces;
  ${({ $role }) => {
    switch($role) {
      case 'system':
        return css`
          background-color: var(--background-color-primary);
          border-radius: 0 20px 20px 20px;
          color: var(--system-message-color);
          box-shadow: inset 0 -2px 0 var(--box-shadow-color);
        `;
      case 'user':
        return css`
          background-color: var(--point-color-0);
          border-radius: 20px 20px 0 20px;
          color: var(--user-message-color);
        `;
    }
  }};

${mediaQuery(TABLET_BREAK_POINT)} {
    font-size: 1rem;
    max-width: 80%;
  }
`;

export const Time = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;
  padding: 0 10px;
  color: var(--text-color);

  ${mediaQuery(TABLET_BREAK_POINT)} {
    padding: 0 5px;
    font-size: 0.8rem;
  }
`;