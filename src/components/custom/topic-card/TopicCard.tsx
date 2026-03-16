"use client";

import Link from "next/link";
import { HiEllipsisVertical, HiMiniFolder, HiMiniPlus } from "react-icons/hi2";
import { Subject, Topic } from "@/data/types";
import { useTopics } from "@/data/contexts/TopicsContext";

interface TopicCardProps {
  topic: Subject | Topic;
  quantity?: number;
  subjectPath?: string;
}

const TopicCard: React.FC<TopicCardProps> = ({
  quantity,
  topic,
  subjectPath,
}) => {
  const isTopic = "subjectId" in topic;
  const href = isTopic
    ? `/dashboard/${subjectPath}/${topic.path}`
    : `/dashboard/${topic.path}`;

  return (
    <Link href={href}>
      <div
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
            <h3 className="text-[1.6rem] font-semibold">{topic.name}</h3>
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

          {/* {topic.description && (
            <p className="text-small text-[#525252] mt-1 line-clamp-2">
              {topic.description}
            </p>
          )} */}

          <div className="flex flex-col gap-3 my-3 text-small font-normal mb-12">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-12 w-12 bg-tint-gray text-[1.8rem] rounded-full">
                <HiMiniFolder />
              </div>
              <p>{quantity !== undefined ? `${quantity} Cards` : "Empty"}</p>
            </div>
          </div>

          <p className="text-[1.1rem] text-[#525252]">
            Last updated: {new Date(topic.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
