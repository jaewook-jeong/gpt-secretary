import { useChattingStore } from '@/core/store';
import { Wrapper } from './Body.styled';

const Body = () => {
  const { messages, hasError, isWaiting } = useChattingStore((state) => state);

  return <Wrapper>hello</Wrapper>;
};

export default Body;
