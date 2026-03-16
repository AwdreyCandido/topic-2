"use client";

import Link from "next/link";
import {
  HiEllipsisVertical,
  HiFolderOpen,
  HiMiniFolder,
  HiMiniPlus,
  HiOutlineFolderOpen,
} from "react-icons/hi2";
import { Subject } from "@/data/types";
import { PiCardsThreeFill } from "react-icons/pi";
import { useTopics } from "@/data/contexts/TopicsContext";

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const totalCards = subject.topics.reduce(
    (acc, topic) => acc + topic.flashcards.length,
    0
  );
  const { selectSubjectId } = useTopics();

  return (
    <Link href={`/dashboard/${subject.path}`}>
      <div
        onClick={() => selectSubjectId(subject.id)}
        className="
          pop-in flex flex-col justify-between gap-4
          bg-[#f1f1f1] rounded-[0.8rem] p-4
          shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
          border border-light-gray text-[#323232]
          cursor-pointer transition-all duration-300 ease-in-out
          hover:shadow-none
        "
      >
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-[1.6rem] font-semibold">{subject.name}</h3>
            <div className="flex gap-2">
              <button
                onClick={(e) => e.preventDefault()}
                className="
                self-start flex items-center justify-center h-12 w-12
                border border-dashed border-[#a3a3a3]
                text-[#a3a3a3] text-[1.8rem] rounded-full cursor-pointer
                transition-all duration-300
                hover:bg-[#cccccc93] hover:text-[#323232] hover:border-[#323232]
              "
              >
                <HiMiniPlus />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="
                flex items-center justify-center h-12 w-12
                text-[2.2rem] rounded-full cursor-pointer
                transition-all duration-300 hover:bg-[#cccccc93]
              "
              >
                <HiEllipsisVertical />
              </button>
            </div>
          </div>

          {subject.description && (
            <p className="text-small text-[#525252] mt-1 line-clamp-2">
              {subject.description}
            </p>
          )}

          <div className="flex flex-col gap-3 my-3 text-small font-normal mb-12">
            <div className="grid grid-cols-2 items-center gap-8">
              <div className=" flex items-center gap-3">
                <div className="flex items-center justify-center h-12 w-12 bg-tint-gray rounded-full text-[1.8rem]">
                  <HiFolderOpen />
                </div>
                <span className="font-medium">
                  {subject.topics.length} Topics
                </span>
              </div>
              <div className=" flex items-center gap-3">
                <div className=" flex items-center justify-center h-12 w-12 bg-tint-gray rounded-full text-[1.8rem]">
                  <PiCardsThreeFill />
                </div>
                <span className="font-medium">
                  <span className="text-[#525252]">
                    {totalCards} cards total
                  </span>
                </span>
              </div>
            </div>
          </div>

          <p className="text-[1.1rem] text-[#525252]">
            Last updated: {new Date(subject.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
