import Chatbot from "./Chatbot";

export default function ChatPage({
  params,
}: {
  params: { categoryId: string; contentId: string };
}) {
  return <Chatbot params={params} />;
}
