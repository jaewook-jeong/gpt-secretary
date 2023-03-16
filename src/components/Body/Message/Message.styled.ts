import { Role } from '@/types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MessageFlexWrapper = styled.div<{ $role: Role }>`
  width: 100%;
  display: flex;
  flex-direction: ${({$role}) => $role === 'system' ? 'row' : 'row-reverse'};
`;

export const MessageWrapper = styled.div<{ $role: Role }>`
  width: max-content;
  max-width: 70%;
  padding: 10px;
  font-size: 1.2rem;
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
`;