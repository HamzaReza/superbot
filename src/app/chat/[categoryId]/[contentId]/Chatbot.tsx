"use client";

import { allData } from "@/app/data";
import { SubContent } from "@/app/types";
import { useEffect, useState } from "react";

export default function Chatbot({
  params,
}: {
  params: { categoryId: string; contentId: string };
}) {
  const [content, setContent] = useState<SubContent | null>(null);

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

  return (
    <div className="container mx-auto p-4">
      <div className="bg-card rounded-xl p-6 text-white">
        <div className="flex items-center gap-4 mb-6">
          {content?.icon && (
            <div className="bg-[#2A2A2A] p-3 rounded-lg">
              <content.icon className="w-8 h-8 text-[var(--primary-cyan)]" />
            </div>
          )}
          <div>
            {content && (
              <>
                <h1 className="text-2xl font-bold text-white">
                  {content.name}
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  {content.description}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div className="h-[400px] bg-[#1E1E1E] rounded-lg p-4"></div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-3 rounded-lg bg-[#2A2A2A] text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-cyan)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
