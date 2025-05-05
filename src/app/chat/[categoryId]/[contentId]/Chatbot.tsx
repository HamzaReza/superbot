"use client";

import { allData } from "@/app/data";
import { SubContent } from "@/app/types";
import { Message } from "@/app/types/chat";
import { useEffect, useState } from "react";

export default function Chatbot({
  params,
}: {
  params: { categoryId: string; contentId: string };
}) {
  const [content, setContent] = useState<SubContent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    try {
      const storedCategoryId = JSON.parse(
        localStorage.getItem("chat_category_id") as string
      );
      const storedContentId = JSON.parse(
        localStorage.getItem("chat_content_id") as string
      );

      const category = allData.find((item) => item.id === storedCategoryId);
      if (category) {
        const foundContent = category.allcontents.find(
          (content) => content.id === storedContentId
        );
        if (foundContent) {
          setContent(foundContent);
        }
      }
    } catch (error) {
      console.error("Error retrieving content:", error);
    }
  }, [params.categoryId, params.contentId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row m-3 gap-4 min-h-screen"
    >
      <div className="w-full lg:w-1/3 flex flex-col h-[calc(100vh-8rem)] bg-[#1E1E1E] rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-4">
          {content?.icon && (
            <div className="bg-[#2A2A2A] p-3 rounded-lg shadow-md">
              <content.icon className="w-8 h-8 text-[var(--primary-cyan)]" />
            </div>
          )}
          <div>
            {content && (
              <>
                <h1 className="text-xl font-bold text-white">{content.name}</h1>
                <p className="text-gray-400 text-sm mt-1">
                  {content.description}
                </p>
              </>
            )}
          </div>
        </div>
        {content?.questions && content.questions.length > 0 && (
          <div className="mt-6 space-y-4 overflow-y-auto flex-grow pr-4">
            {content.questions.map((question, index) => (
              <div key={index} className="space-y-2">
                <p className="text-white text-sm font-bold">
                  {question.que}{" "}
                  {question.required && <span className="text-red-500">*</span>}
                </p>
                <textarea
                  required={question.required}
                  className="w-full p-3 rounded-lg bg-[#2A2A2A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-cyan)] resize-y min-h-[100px] shadow-inner"
                  placeholder={`Answer for ${question.placeholder}`}
                />
              </div>
            ))}
          </div>
        )}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[var(--primary-cyan)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col bg-[#1E1E1E] rounded-lg p-6 shadow-lg h-[calc(100vh-8rem)]">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-center">
              Start a conversation by submitting your questions above
            </p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto space-y-4 pr-4">
            {messages.map((message, index) => (
              <div
                key={`${message.isUser ? "user" : "bot"}-${index}`}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg shadow-md ${
                    message.isUser
                      ? "bg-[var(--primary-cyan)] text-white"
                      : "bg-[#2A2A2A] text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
