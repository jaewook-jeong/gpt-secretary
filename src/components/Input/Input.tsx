import { KeyboardEvent, useCallback, useRef } from 'react';
import { FiNavigation } from 'react-icons/fi';
import { Wrapper, ChatTextArea, SendButton } from './Input.styled';
import { useChattingActions, useChattingStore } from '@/core/store';
import { getJaewookSecretary } from '@/core/gpt';

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
    pushUserMessage(message);
    try {
      const res = await getJaewookSecretary(message);
      pushSystemMessage(res);
      if (textareaRef.current) {
        textareaRef.current.value = '';
      }
    } catch (error) {
      console.error(error);
      setError();
      throw new Error('비서가 대답에 어려움을 겪고 있습니다.');
    }
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
        placeholder="저에 대해 궁금한걸 물어보세요!"
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
      <SendButton type="button" onClick={onSubmit} disabled={disabled}>
        <FiNavigation size={30} color="#fefefe" />
      </SendButton>
    </Wrapper>
  );
};

export default Input;
