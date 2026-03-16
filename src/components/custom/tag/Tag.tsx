import { topicTags } from "@/data/data";
import { ITag } from "@/data/types";
import React from "react";

interface TagProps {
  tagsId: number[];
}

const Tag: React.FC<TagProps> = ({ tagsId }) => {
  const cardTags = topicTags.filter((tag) => tagsId.includes(tag.id));

  return (
    <div className="flex gap-2">
      {cardTags.map((tag) => (
        <span
          key={tag.id}
          className={`inline-block px-6 py-[0.1rem] rounded-full font-medium`}
          style={{ backgroundColor: tag.color }}
        >
          <p className="text-tiny text-dark-gray line-clamp-2 leading-relaxed">
            {tag.name}
          </p>
        </span>
      ))}
    </div>
  );
};

export default Tag;
