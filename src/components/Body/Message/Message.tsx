import { Message } from '@/core/types';
import { MessageFlexWrapper, MessageWrapper, MessageBodyWrapper, Time } from './Message.styled';

const Message = ({ message: { sendAt, sender, body } }: { message: Message }) => {
  return (
    <MessageFlexWrapper>
      <MessageWrapper $role={sender}>
        <MessageBodyWrapper $role={sender}>{body}</MessageBodyWrapper>
        <Time>{sendAt.format('HH:mm A')}</Time>
      </MessageWrapper>
    </MessageFlexWrapper>
  );
};

export default Message;
