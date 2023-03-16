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
    messages: [],
    isWaiting: false,
    hasError: false,
    actions: {
      pushUserMessage: (content) => {
        const { messages } = getState();
        const message: Message = {
          id: generateRandomString(5),
          sendAt: dayjs().format('YYYY년 MM월 DD일 HH시mm분'),
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
          sendAt: dayjs().format('YYYY년 MM월 DD일 HH시mm분'),
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
