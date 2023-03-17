import { useChattingStore } from '@/core/store';
import { Wrapper, Date } from './Body.styled';
import { Message } from './Message';
import TypingSpinner from './Message/TypingSpinner';

const Body = () => {
  const { messages, isWaiting } = useChattingStore((state) => state);

  return (
    <Wrapper>
      {messages.map((message, index) => {
        const isNewDate = index === 0 || message.sendAt.diff(messages[index - 1].sendAt, 'day') > 0;
        console.log(message.sendAt.diff(messages[index - 1]?.sendAt, 'day'), isNewDate);

        return (
          <>
            {isNewDate && <Date>{message.sendAt.format('YYYY년MM월DD일')}</Date>}
            <Message key={message.id} message={message} />
          </>
        );
      })}
      {isWaiting && <TypingSpinner />}
    </Wrapper>
  );
};

export default Body;
