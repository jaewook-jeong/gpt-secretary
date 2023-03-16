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
        id: 'BKW14',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'user',
        body: '너는 어떤개발자야?',
      },
      {
        id: 'mpICm',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'system',
        body: '저는 인공지능 챗봇 개발자입니다. 제가 만든 챗봇은 사용자들의 질문에 대답하거나 일정 관리… 목표는 사용자들이 좀 더 편리하고 즐겁게 인터넷을 이용할 수 있도록 도와주는 것입니다.',
      },
      { id: 'wIqqK', sendAt: '2023년 03월 16일 18시39분', sender: 'user', body: '너는 누구야?' },
      {
        id: 'LXIu4',
        sendAt: '2023년 03월 16일 18시39분',
        sender: 'system',
        body: '저는 가상의 AI 어시스턴트입니다. 무엇을 도와드릴까요?',
      },
      {
        id: 'BKW1422',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'user',
        body: '너는 어떤개발자야?',
      },
      {
        id: 'mpICm33',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'system',
        body: '저는 인공지능 챗봇 개발자입니다. 제가 만든 챗봇은 사용자들의 질문에 대답하거나 일정 관리… 목표는 사용자들이 좀 더 편리하고 즐겁게 인터넷을 이용할 수 있도록 도와주는 것입니다.',
      },
      { id: 'wIqqK1', sendAt: '2023년 03월 16일 18시39분', sender: 'user', body: '너는 누구야?' },
      {
        id: 'LXIu444',
        sendAt: '2023년 03월 16일 18시39분',
        sender: 'system',
        body: '저는 가상의 AI 어시스턴트입니다. 무엇을 도와드릴까요?',
      },
      {
        id: 'BKW14123',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'user',
        body: '너는 어떤개발자야?',
      },
      {
        id: 'mpICm123',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'system',
        body: '저는 인공지능 챗봇 개발자입니다. 제가 만든 챗봇은 사용자들의 질문에 대답하거나 일정 관리… 목표는 사용자들이 좀 더 편리하고 즐겁게 인터넷을 이용할 수 있도록 도와주는 것입니다.',
      },
      { id: 'wIqqK2', sendAt: '2023년 03월 16일 18시39분', sender: 'user', body: '너는 누구야?' },
      {
        id: 'LXIu4123',
        sendAt: '2023년 03월 16일 18시39분',
        sender: 'system',
        body: '저는 가상의 AI 어시스턴트입니다. 무엇을 도와드릴까요?',
      },
      {
        id: 'BKW14ss',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'user',
        body: '너는 어떤개발자야?',
      },
      {
        id: 'mpICmss',
        sendAt: '2023년 03월 16일 18시38분',
        sender: 'system',
        body: '저는 인공지능 챗봇 개발자입니다. 제가 만든 챗봇은 사용자들의 질문에 대답하거나 일정 관리… 목표는 사용자들이 좀 더 편리하고 즐겁게 인터넷을 이용할 수 있도록 도와주는 것입니다.',
      },
      { id: 'wIqqK3', sendAt: '2023년 03월 16일 18시39분', sender: 'user', body: '너는 누구야?' },
      {
        id: 'LXIu4ss',
        sendAt: '2023년 03월 16일 18시39분',
        sender: 'system',
        body: '저는 가상의 AI 어시스턴트입니다. 무엇을 도와드릴까요?',
      },
    ],
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
