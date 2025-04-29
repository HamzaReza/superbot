export type Data = {
  id: number;
  category: string;
  allcontents: SubContent[];
};

// Import IconType from utils/icons
import { IconType } from "../utils/icons";
import { SVGProps } from "react";

export type SubContent = {
  id: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>> & { name: IconType };
  name: string;
  description: string;
  questions: {
    que: string;
    required: boolean;
    placeholder: string;
  }[];
  prompt: string;
  defaultQuestion?: string;
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
