import { Message } from '@/types';
import { MessageFlexWrapper, MessageWrapper } from './Message.styled';

const Message = ({ message: { sendAt, sender, body } }: { message: Message }) => {
  return (
    <MessageFlexWrapper $role={sender}>
      <MessageWrapper $role={sender}>{body}</MessageWrapper>
    </MessageFlexWrapper>
  );
};

export default Message;
