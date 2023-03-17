import { Fragment, useEffect, useRef } from 'react';
import { useChattingStore } from '@/core/store';
import { Wrapper, Date } from './Body.styled';
import { Message } from './Message';
import TypingSpinner from './Message/TypingSpinner';

const Body = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const messagesBodyRef = useRef<HTMLDivElement>(null);
  const { messages, isWaiting } = useChattingStore((state) => state);

  useEffect(() => {
    if (!messagesBodyRef.current) return;
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = messagesBodyRef.current.scrollHeight;
  }, [isWaiting]);

  return (
    <Wrapper ref={scrollRef}>
      <div ref={messagesBodyRef}>
        {messages.map((message, index) => {
          const isNewDate =
            index === 0 || message.sendAt.diff(messages[index - 1].sendAt, 'day') > 0;
          return (
            <Fragment key={message.id}>
              {isNewDate && <Date>{message.sendAt.format('YYYY년MM월DD일')}</Date>}
              <Message message={message} />
            </Fragment>
          );
        })}
        {isWaiting && <TypingSpinner />}
      </div>
    </Wrapper>
  );
};

export default Body;
