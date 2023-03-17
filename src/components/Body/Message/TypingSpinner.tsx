import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { MessageWrapper, MessageFlexWrapper } from './Message.styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--point-color-0);
`;

const grow = keyframes`
  from {transform: scale(0,0); opacity: 0;}
  to {transform: scale(1,1); opacity: 1;}
`;

const move = keyframes`
  from {transform: translateX(0px)}
  to {transform: translateX(45px)}
`;

const Box = styled.div`
  width: 100px;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 1rem;
  width: 50px;
  display: flex;
  position: relative;
  align-items: center;
`;

const Circle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--point-color-0);
  animation: ${move} 600ms linear 0ms infinite;
  margin-right: 7px;

  span:first-of-type() {
    position: absolute;
    top: 4px;
    left: 0;
    animation: ${grow} 600ms linear 0ms infinite;
  }

  &:last-child {
    position: absolute;
    top: 4px;
    right: 0;
    margin-right: 0;
    animation: ${grow} 600ms linear 0s infinite reverse;
  }
`;

const TypingSpinner = () => (
  <MessageFlexWrapper>
    <MessageWrapper $role="system">
      <Wrapper>
        typing
        <Box>
          <Container>
            <Circle />
            <Circle />
            <Circle />
          </Container>
        </Box>
      </Wrapper>
    </MessageWrapper>
  </MessageFlexWrapper>
);

export default TypingSpinner;
