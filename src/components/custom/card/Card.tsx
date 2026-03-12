"use client";

import React from "react";
import { Flashcard } from "@/data/types";
import { HiPencilSquare } from "react-icons/hi2";

interface CardProps {
  flashcard: Flashcard;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ flashcard, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        group flex flex-col justify-between min-h-[14rem]
        bg-[#f1f1f1] rounded-[0.8rem]
        shadow-[0px_3px_8px_rgba(0,0,0,0.12)] p-4
        border-[1.5px] border-[#c5c5c5]
        cursor-pointer
        transition-all duration-300
        hover:shadow-none hover:border-gray
      "
    >
      <p className="text-[1.3rem] font-semibold text-[#323232] leading-snug line-clamp-3">
        {flashcard.question}
      </p>

      {flashcard.answer && (
        <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
          <p className="text-small text-[#525252] line-clamp-2 leading-relaxed">
            {flashcard.answer}
          </p>
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        <p className="text-[1.1rem] text-[#a3a3a3]">
          {new Date(flashcard.updatedAt).toLocaleDateString()}
        </p>
        <div
          className="
            flex items-center justify-center h-9 w-9 rounded-full
            text-[#a3a3a3] text-[1.6rem]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            hover:bg-[#e0e0e0] hover:text-[#323232]
          "
        >
          <HiPencilSquare />
        </div>
      </div>
    </div>
  );
};

export default Card;
