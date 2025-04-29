"use client";

import { useParams } from "next/navigation";
import { SubContent } from "@/app/types";
import { useEffect, useState } from "react";
import { iconMap } from "@/app/utils/icons";

export default function ChatPage() {
  const routerParams = useParams();
  const categoryId = routerParams.categoryId;
  const contentId = routerParams.contentId;
  const [content, setContent] = useState<SubContent | null>(null);

  useEffect(() => {
    try {
      const storageKey = `chat_content_${categoryId}_${contentId}`;
      const storedContent = localStorage.getItem(storageKey);

      if (storedContent) {
        const parsedContent = JSON.parse(storedContent);
        const iconComponent =
          iconMap[parsedContent.iconType as keyof typeof iconMap];
        const reconstructedContent = {
          ...parsedContent,
          icon: iconComponent,
        };
        setContent(reconstructedContent);
      }
    } catch (error) {
      console.error("Error retrieving content:", error);
    }
  }, [categoryId, contentId]);

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
