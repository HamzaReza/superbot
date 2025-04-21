export type Data = {
  id: number;
  category: string;
  allcontents: {
    id: number;
    icon: React.ElementType;
    name: string;
    description: string;
    questions: {
      que: string;
      required: boolean;
      placeholder: string;
    }[];
    prompt: string;
    defaultQuestion?: string;
  }[];
};

export type Category = {
  title: string;
  description: string;
};

export type SearchProps = {
  value?: string;
  _onChangeData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  _onCancel: () => void;
};
