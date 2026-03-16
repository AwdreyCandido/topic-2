"use client";

import { use } from "react";
import { useCards } from "@/data/contexts/CardsContext";
import TopicCard from "@/src/components/custom/topic-card/TopicCard";
import Breadcrumb from "@/src/components/custom/breadcrumb/Breadcrumb";
import { HiMiniPlus } from "react-icons/hi2";
import { useSubjects } from "@/data/contexts/SubjectsContext";
import { useTopics } from "@/data/contexts/TopicsContext";

interface SubjectPageProps {
  params: Promise<{ subject: string }>;
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const { subject: subjectPath } = use(params);
  const { getSubjectByPath } = useCards();
  const { openTopicModal } = useTopics();
  const subject = getSubjectByPath(subjectPath);

  if (!subject) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-24 text-[#c2c2c2]">
        <p className="text-[2rem]">Subject not found.</p>
      </div>
    );
  }

  const totalCards = subject.topics.reduce(
    (acc, t) => acc + t.flashcards.length,
    0
  );

  return (
    <div className="pb-4 select-none">
      <Breadcrumb
        items={[
          { label: "All Subjects", href: "/dashboard" },
          { label: subject.name },
        ]}
      />

      <div className="flex items-center justify-between mt-6 mb-12">
        <div>
          <h1 className="text-[3.2rem] font-semibold">{subject.name}</h1>
          {subject.description && (
            <p className="text-[1.4rem] text-[#525252] mt-1">
              {subject.description}
            </p>
          )}
        </div>
        <button
          onClick={openTopicModal}
          className="
            flex items-center gap-2 px-5 py-3
            bg-dark-gray text-white rounded-[0.8rem]
            text-[1.6rem] font-medium
            hover:bg-gray transition-colors duration-200
          "
        >
          <HiMiniPlus className="text-[1.8rem]" />
          New Topic
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 mb-8 p-4 bg-[#f8f8f8] rounded-[0.8rem] border border-[#e8e8e8]">
        <div className="text-center">
          <p className="text-subheading font-bold text-[#323232]">
            {subject.topics.length}
          </p>
          <p className="text-small text-[#525252]">Topics</p>
        </div>
        <div className="w-px h-14 bg-[#e0e0e0]" />
        <div className="text-center">
          <p className="text-subheading font-bold text-[#323232]">
            {totalCards}
          </p>
          <p className="text-small text-[#525252]">Flashcards</p>
        </div>
        <div className="w-px h-14 bg-[#e0e0e0]" />
        <div className="text-center">
          <p className="text-small text-[#525252]">Last updated</p>
          <p className="text-[1.3rem] font-medium text-[#323232]">
            {new Date(subject.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {subject.topics.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(26rem,1fr))] gap-4">
          {subject.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              quantity={topic.flashcards.length}
              subjectPath={subject.path}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-[#c2c2c2]">
          <p className="text-[2rem]">No topics yet.</p>
          <p className="text-[1.4rem] mt-1">
            Add your first topic to this subject.
          </p>
        </div>
      )}
    </div>
  );
}
