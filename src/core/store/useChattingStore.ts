import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { Message } from "@/types";
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

export const useChattingStore = create(devtools<ChattingStoreType>((setState, getState) => ({
  messages: [],
  isWaiting: false,
  hasError: false,
  actions: {
    pushUserMessage: (content) => {
      const { messages } = getState();
      const message: Message = {
        id: generateRandomString(5),
        sendAt: Date.now().toLocaleString(),
        sender: 'user',
        body: content,
      }
      setState({
        messages: [...messages, message],
        isWaiting: true,
      });
    },
    pushSystemMessage: (content) => {
      const { messages } = getState();
      const message: Message = {
        id: generateRandomString(5),
        sendAt: Date.now().toLocaleString(),
        sender: 'system',
        body: content,
      }
      setState({
        messages: [...messages, message],
        isWaiting: false,
      });
    },
    setError: () => {
      setState({ hasError: true });
    }
  },
})));

export const useChattingActions = useChattingStore(({ actions }) => actions);