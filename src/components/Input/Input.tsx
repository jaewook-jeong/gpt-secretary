import { KeyboardEvent, useCallback, useRef } from 'react';
import { FiNavigation } from 'react-icons/fi';
import { Wrapper, ChatTextArea, SendButton } from './Input.styled';
import { useChattingActions, useChattingStore } from '@/core/store';

const Input = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { hasError, isWaiting } = useChattingStore((state) => state);
  const { pushUserMessage, pushSystemMessage, setError } = useChattingActions();

  const onChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const onSubmit = useCallback(async () => {
    if (!textareaRef.current) return;
    const message = textareaRef.current.value;
    if (message.length === 0) return;
    pushUserMessage(message);
    if (textareaRef.current) {
      textareaRef.current.value = '';
    }

    const res = await fetch('/api/openai', {
      body: JSON.stringify({ content: message }),
      method: 'post',
    });
    if (res.status >= 500) {
      setError();
    }
    const data = await res.json();
    pushSystemMessage(data);
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  const disabled = hasError || isWaiting;
  return (
    <Wrapper>
      <ChatTextArea
        ref={textareaRef}
        onChange={onChange}
        placeholder={hasError ? '에러가 발생했습니다.' : '저에 대해 궁금한걸 물어보세요!'}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
      <SendButton type="button" onClick={onSubmit} disabled={disabled} aria-label="send message">
        <FiNavigation size={30} color="#fefefe" />
      </SendButton>
    </Wrapper>
  );
};

export default Input;
