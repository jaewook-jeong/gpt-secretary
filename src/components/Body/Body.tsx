import { useChattingStore } from '@/core/store';
import { Wrapper } from './Body.styled';
import { Message } from './Message';
import TypingSpinner from './Message/TypingSpinner';

const Body = () => {
  const { messages, isWaiting } = useChattingStore((state) => state);

  return (
    <Wrapper>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isWaiting && <TypingSpinner />}
    </Wrapper>
  );
};

export default Body;
