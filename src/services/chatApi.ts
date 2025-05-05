import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ChatRequest {
  prompts: string[];
}

interface ChatResponse {
  answer: string;
}

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChatResponse: builder.mutation<ChatResponse, ChatRequest>({
      query: (body) => ({
        url: "/chat",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetChatResponseMutation } = chatApi;
