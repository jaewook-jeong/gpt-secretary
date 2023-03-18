import { OpenAIStream } from '@/core/utils/OpenAIStream';
import { CreateChatCompletionRequest } from '@/core/types';

export const config = {
  runtime: "edge",
};

export default async function handler(
  req: Request,
) {
  const { content } = (await req.json()) as { content: string };
  const payload: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    max_tokens: 2048,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant',
      },
      {
        role: 'assistant',
        content: process.env.WHO_AM_I as string,
      },
      {
        role: 'assistant',
        content: process.env.MORE_DETAIL as string,
      },
      {
        role: 'user',
        content: `Answer me as Developer Jeong Jae-wook. ${content}`,
      },
    ],
    stream: true,
  };
  const stream = await OpenAIStream(payload);
  return new Response(stream);
}

