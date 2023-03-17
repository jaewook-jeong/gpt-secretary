import { Fragment, useEffect, useRef } from 'react';
import { useChattingActions, useChattingStore } from '@/core/store';
import { INIT_MESSAGE } from '@/constants';
import { Wrapper, Date } from './Body.styled';
import { Message } from './Message';
import TypingSpinner from './Message/TypingSpinner';

const Body = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const messagesBodyRef = useRef<HTMLDivElement>(null);
  const { messages, isWaiting } = useChattingStore((state) => state);
  const { pushSystemMessage } = useChattingActions();

  useEffect(() => {
    if (!messagesBodyRef.current) return;
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = messagesBodyRef.current.scrollHeight;
  }, [isWaiting]);

  useEffect(() => {
    pushSystemMessage(INIT_MESSAGE);
  }, []);

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
