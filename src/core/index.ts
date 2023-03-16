import { getJaewookSecretary } from './gpt';
import { useChattingActions } from './store';

const sendMessage = async (content: string) => {
  const { pushUserMessage, pushSystemMessage, setError } = useChattingActions;
  pushUserMessage(content);
  try {
    const res = await getJaewookSecretary(content);
    pushSystemMessage(res);
  } catch (error) {
    console.error(error);
    setError();
    throw new Error('비서가 대답에 어려움을 겪고 있습니다.');
  }
}