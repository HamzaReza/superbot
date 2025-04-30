import { Metadata } from "next";
import { allData } from "@/app/data";

type Props = {
  children: React.ReactNode;
  params: Promise<{ categoryId: string; contentId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { categoryId, contentId } = resolvedParams;

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
