import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import dayjs from 'dayjs';
import { Message } from '@/types';
import { generateRandomString } from '../utils';

export type ChattingStoreType = {
  messages: Message[];
  isWaiting: boolean;
  hasError: boolean;
  actions: {
    pushUserMessage: (content: string) => void;
    pushSystemMessage: (content: string) => void;
    setError: () => void;
  };
};

export const useChattingStore = create(
  devtools<ChattingStoreType>((setState, getState) => ({
    messages: [
      {
        id: 'HELLO_CHRIS',
        sendAt: dayjs(),
        sender: 'system',
        body: '안녕하세요! 개발자 정재욱에 대해 알려드리는 AI비서입니다🧑🏽‍💻\n 답변에 다소 시간이 걸릴 수 있습니다. \n 무엇을 도와드릴까요?',
      },
    ],
    isWaiting: false,
    hasError: false,
    actions: {
      pushUserMessage: (content) => {
        const { messages } = getState();
        const message: Message = {
          id: generateRandomString(5),
          sendAt: dayjs(),
          sender: 'user',
          body: content,
        };
        setState({
          messages: [...messages, message],
          isWaiting: true,
        });
      },
      pushSystemMessage: (content) => {
        const { messages } = getState();
        const message: Message = {
          id: generateRandomString(5),
          sendAt: dayjs(),
          sender: 'system',
          body: content,
        };
        setState({
          messages: [...messages, message],
          isWaiting: false,
        });
      },
      setError: () => {
        setState({ hasError: true });
      },
    },
  })),
);

export const useChattingActions = () => useChattingStore(({ actions }) => actions);
