import { Metadata } from "next";
import { allData } from "@/app/data";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string; contentId: string };
}): Promise<Metadata> {
  const { categoryId, contentId } = await Promise.resolve(params);

  const category = allData.find((item) => item.id === parseInt(categoryId));
  const content = category?.allcontents.find(
    (content) => content.id === parseInt(contentId)
  );

  return {
    title: content ? `${category?.category} - ${content.name}` : "Chat",
  };
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
