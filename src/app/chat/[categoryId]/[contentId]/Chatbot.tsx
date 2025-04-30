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
  console.log("🚀 ~ content:", content);

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
    <form className="flex flex-row m-3 gap-4">
      <div className="w-1/3">
        <div className="flex items-center gap-4">
          {content?.icon && (
            <div className="bg-[#2A2A2A] p-3 rounded-lg">
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
          <div className="mt-6 space-y-4">
            {content.questions.map((question, index) => (
              <div key={index} className="space-y-1">
                <p className="text-white text-sm font-medium">
                  {question.que}{" "}
                  {question.required && <span className="text-red-500">*</span>}
                </p>
                <textarea
                  required={question.required}
                  className="w-full p-3 rounded-lg bg-[#2A2A2A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-cyan)] resize-y"
                  placeholder={`Answer for ${question.placeholder}`}
                />
              </div>
            ))}
          </div>
        )}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[var(--primary-cyan)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-2/3 flex bg-[#1E1E1E] rounded-lg p-4 text-sm"></div>
    </form>
  );
}
