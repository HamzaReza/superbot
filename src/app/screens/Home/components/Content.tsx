"use client";

import { Data, SubContent } from "@/app/types";
import { useRouter } from "next/navigation";
export const Content = ({ categoryItems }: { categoryItems: Data[] }) => {
  const router = useRouter();
  const _onClick = (item: Data, content: SubContent) => {
    localStorage.setItem("chat_category_id", JSON.stringify(item.id));
    localStorage.setItem("chat_content_id", JSON.stringify(content.id));
    router.push(`/chat/${item.id}/${content.id}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categoryItems.map((item: Data) =>
        item.allcontents.map((content) => {
          return (
            <div
              key={`${item.id}-${content.id}`}
              onClick={() => _onClick(item, content)}
            >
              <div className="w-full p-4 mb-2 bg-card rounded-xl text-white cursor-pointer">
                <div className="mb-2">
                  <content.icon className="w-8 h-8 text-[var(--primary-cyan)]" />
                </div>
                <div className="text-lg font-bold mb-1">{content.name}</div>
                <div className="text-sm text-gray-400">
                  {content.description}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
