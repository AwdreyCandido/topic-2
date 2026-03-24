"use client";

import React from "react";
import { Flashcard } from "@/data/types";
import { HiOutlineEye, HiPencilSquare } from "react-icons/hi2";
import Tag from "../tag/Tag";

interface CardProps {
  flashcard: Flashcard;
  onClick: () => void;
  onEditCard: () => void;
}

const Card: React.FC<CardProps> = ({ flashcard, onEditCard }) => {
  return (
    <div
      // onClick={onClick}
      className="
        group flex flex-col justify-between min-h-[14rem]
        bg-[#f1f1f1] rounded-[0.8rem]
        shadow-[0px_3px_8px_rgba(0,0,0,0.12)] p-4
        border-[1.5px] border-light-gray
        transition-all duration-300
        hover:shadow-none
        select-none
      "
    >
      <div>
        <p className="text-[1.3rem] font-semibold text-[#323232] leading-snug line-clamp-3 border-b border-[#e0e0e0] pb-4">
          {flashcard.question}
        </p>

        <div className="mt-3">
          <Tag tagsId={flashcard.tags} />
        </div>
      </div>
      {/* {flashcard.answer && (
        <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
          <p className="text-small text-[#525252] line-clamp-2 leading-relaxed">
            {flashcard.answer}
          </p>
        </div>
      )} */}

      <div className="flex items-center justify-between mt-4">
        <p className="text-[1.1rem] text-[#a3a3a3]">
          {new Date(flashcard.updatedAt).toLocaleDateString()}
        </p>
        <div className="flex gap-4">
          <div
            onClick={() => {}}
            className="
            flex items-center justify-center h-12 w-12 p-1 rounded-full
            text-[#a3a3a3] text-subheading
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200 cursor-pointer
            hover:bg-[#e0e0e0] hover:text-[#323232]
          "
          >
            <HiOutlineEye />
          </div>
          <div
            onClick={onEditCard}
            className="
            flex items-center justify-center h-12 w-12 p-1 rounded-full
            text-[#a3a3a3] text-subheading
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200 cursor-pointer
            hover:bg-[#e0e0e0] hover:text-[#323232]
          "
          >
            <HiPencilSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
