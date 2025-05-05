"use client";

import Image from "next/image";
import Link from "next/link";
import bot from "@/app/assets/images/logo.png";
import chat from "@/app/assets/images/chat-bubble.png";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b-2">
      <Link href={"/"}>
        <Image src={bot} alt="logo" width={50} height={50} />
      </Link>
      <Link href={"/"}>
        <Image src={chat} alt="chat" width={50} height={50} />
      </Link>
    </nav>
  );
};
