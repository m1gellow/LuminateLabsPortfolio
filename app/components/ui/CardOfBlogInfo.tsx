import React from "react";

interface CardBlogInfoProps {
  text: string;
}

const CardOfBlogInfo: React.FC<CardBlogInfoProps> = ({ text }) => {
  return (
    <div className="w-[250px] glassmorphism h-[60px] rounded-xl">
      <div className="flex items-center justify-center h-full">
        <p className="font-semibold text-[#949494] text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default CardOfBlogInfo;
