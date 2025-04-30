import Chatbot from "./Chatbot";

type Props = {
  params: Promise<{ categoryId: string; contentId: string }>;
};

export default async function ChatPage({ params }: Props) {
  const resolvedParams = await params;
  return <Chatbot params={resolvedParams} />;
}
