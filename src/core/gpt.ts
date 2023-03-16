import { CreateChatCompletionRequest } from 'openai/api';
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getJaewookSecretary = async (content: string): Promise<string> => {
  const completionParams: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    max_tokens: 3000,
    messages: [
      {
        role: 'system',
        content: process.env.NEXT_PUBLIC_WHO_AM_I as string,
      },
      {
        role: 'user',
        content,
      },
    ],
  };

  try {
    const response = await openai.createChatCompletion(completionParams);

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error('비서가 대답에 어려움을 겪고 있습니다.');
  }
};
