"use client";

import { allData } from "@/app/data";
import { SubContent } from "@/app/types";
import { Message } from "@/app/types/chat";
import { useEffect, useState, useRef } from "react";
import { useGetChatResponseMutation } from "@/services/chatApi";

export default function Chatbot({
  params,
}: {
  params: { categoryId: string; contentId: string };
}) {
  const [content, setContent] = useState<SubContent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [getChatResponse] = useGetChatResponseMutation();
  const [followUpMessage, setFollowUpMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const lastMessage = messagesEndRef.current?.previousElementSibling;
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get all textarea values
    const textareas = document.querySelectorAll("textarea");
    const prompts = Array.from(textareas).map((textarea) => textarea.value);

    // Combine all prompts into a single message
    const combinedPrompt = prompts.join("\n");

    // Add single user message to chat
    setMessages((prev) => [
      ...prev,
      {
        text: combinedPrompt,
        isUser: true,
      },
    ]);

    setIsTyping(true);

    try {
      const response = await getChatResponse({
        prompts: [combinedPrompt],
      }).unwrap();

      // Add bot response to chat
      setMessages((prev) => [
        ...prev,
        {
          text: response.answer,
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error("Error getting chat response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, there was an error processing your request.",
          isUser: false,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFollowUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!followUpMessage.trim()) return;

    // Add user's follow-up message
    setMessages((prev) => [
      ...prev,
      {
        text: followUpMessage,
        isUser: true,
      },
    ]);

    // Clear the input
    setFollowUpMessage("");
    setIsTyping(true);

    try {
      // Get all previous messages for context
      const allPrompts = messages.map((msg) => msg.text);
      allPrompts.push(followUpMessage);

      const response = await getChatResponse({ prompts: allPrompts }).unwrap();

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          text: response.answer,
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error("Error getting chat response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, there was an error processing your request.",
          isUser: false,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row m-3 gap-4 min-h-screen">
      <div className="w-full lg:w-1/3 flex flex-col h-[calc(100vh-5rem)] bg-[#1E1E1E] rounded-lg p-6 shadow-lg">
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
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 overflow-y-auto flex-grow px-2"
          >
            {content.questions.map((question, index) => (
              <div key={index} className="space-y-2 pr-2">
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
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[var(--primary-cyan)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="w-full lg:w-2/3 flex flex-col bg-[#1E1E1E] rounded-lg p-6 shadow-lg h-[calc(100vh-5rem)]">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-center">
              Start a conversation by submitting your questions above
            </p>
          </div>
        ) : (
          <>
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
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#2A2A2A] text-white p-4 rounded-lg shadow-md">
                    <div className="flex space-x-2">
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={followUpMessage}
                  onChange={(e) => setFollowUpMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleFollowUp(e);
                    }
                  }}
                  placeholder="Type your follow-up message..."
                  className="flex-1 p-3 rounded-lg bg-[#2A2A2A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-cyan)]"
                />
                <button
                  onClick={(e) => handleFollowUp(e)}
                  className="bg-[var(--primary-cyan)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
