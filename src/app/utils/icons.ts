import { AiTwotoneLike } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import {
  FaAmazon,
  FaEnvelopeOpenText,
  FaFacebook,
  FaFileAlt,
  FaGoogle,
  FaInstagram,
  FaPenNib,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { GiClick, GiLoveSong } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import {
  MdOutlineNotificationsActive,
  MdOutlineSubscriptions,
  MdTitle,
} from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { TbBrandBeats, TbMessageChatbot } from "react-icons/tb";
import { TiStarHalfOutline } from "react-icons/ti";

export const iconMap = {
  AiTwotoneLike: AiTwotoneLike,
  CgWebsite: CgWebsite,
  FaAmazon: FaAmazon,
  FaEnvelopeOpenText: FaEnvelopeOpenText,
  FaFacebook: FaFacebook,
  FaFileAlt: FaFileAlt,
  FaGoogle: FaGoogle,
  FaInstagram: FaInstagram,
  FaPenNib: FaPenNib,
  FaTiktok: FaTiktok,
  FaYoutube: FaYoutube,
  GiClick: GiClick,
  GiLoveSong: GiLoveSong,
  ImProfile: ImProfile,
  MdOutlineNotificationsActive: MdOutlineNotificationsActive,
  MdOutlineSubscriptions: MdOutlineSubscriptions,
  MdTitle: MdTitle,
  RiFilePaper2Line: RiFilePaper2Line,
  TbBrandBeats: TbBrandBeats,
  TbMessageChatbot: TbMessageChatbot,
  TiStarHalfOutline: TiStarHalfOutline,
} as const;

export type IconType = keyof typeof iconMap;
