export interface ChatPageProps {
  params: {
    categoryId: number;
    contentId: number;
  };
}

export interface Message {
  text: string;
  isUser: boolean;
}
