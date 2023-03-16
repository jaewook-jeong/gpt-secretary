import {
    CreateCompletionRequest,
    CreateChatCompletionRequest,
  } from "openai/api";
  const { Configuration, OpenAIApi } = require("openai");
  
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  const openai = new OpenAIApi(configuration);