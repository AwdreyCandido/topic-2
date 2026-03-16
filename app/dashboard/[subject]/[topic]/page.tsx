"use client";

import { use } from "react";
import { useCards } from "@/data/contexts/CardsContext";
import FlashCard from "@/src/components/custom/card/Card";
import Breadcrumb from "@/src/components/custom/breadcrumb/Breadcrumb";
import { HiMiniPlus } from "react-icons/hi2";

interface TopicPageProps {
  params: Promise<{ subject: string; topic: string }>;
}

export default function TopicPage({ params }: TopicPageProps) {
  const { subject: subjectPath, topic: topicPath } = use(params);
  const { getSubjectByPath, getTopicByPath, openEditor, openNewCardEditor } =
    useCards();

  const subject = getSubjectByPath(subjectPath);
  const topic = getTopicByPath(subjectPath, topicPath);

  if (!subject || !topic) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-24 text-[#c2c2c2]">
        <p className="text-[2rem]">Topic not found.</p>
      </div>
    );
  }

  return (
    <div className="pb-4">
      <Breadcrumb
        items={[
          { label: "All Subjects", href: "/dashboard" },
          { label: subject.name, href: `/dashboard/${subject.path}` },
          { label: topic.name },
        ]}
      />

      <div className="flex items-center justify-between mt-6 mb-12">
        <div>
          <h1 className="text-[3.2rem] font-semibold">{topic.name}</h1>
          {topic.description && (
            <p className="text-[1.4rem] text-[#525252] mt-1">
              {topic.description}
            </p>
          )}
        </div>
        <button
          onClick={() => openNewCardEditor(topic.id)}
          className="
            flex items-center gap-2 px-5 py-3
            bg-dark-gray text-white rounded-[0.8rem]
            text-[1.6rem] font-medium
            hover:bg-gray transition-colors duration-200
          "
        >
          <HiMiniPlus className="text-[1.8rem]" />
          New Flashcard
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 mb-8 p-4 bg-[#f8f8f8] rounded-[0.8rem] border border-[#e8e8e8]">
        <div className="text-center">
          <p className="text-subheading font-bold text-[#323232]">
            {topic.flashcards.length}
          </p>
          <p className="text-small text-[#525252]">Flashcards</p>
        </div>
        <div className="w-px h-8 bg-[#e0e0e0]" />
        <div className="text-center">
          <p className="text-small text-[#525252]">Last updated</p>
          <p className="text-[1.3rem] font-medium text-[#323232]">
            {new Date(topic.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {topic.flashcards.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-4">
          {topic.flashcards.map((flashcard) => (
            <FlashCard
              key={flashcard.id}
              flashcard={flashcard}
              onClick={() => {}}
              onEditCard={() => openEditor(flashcard)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-[#c2c2c2]">
          <p className="text-[2rem]">No flashcards yet.</p>
          <p className="text-[1.4rem] mt-1">
            Click{" "}
            <button
              onClick={() => openNewCardEditor(topic.id)}
              className="underline text-[#323232] hover:text-[#525252]"
            >
              New Flashcard
            </button>{" "}
            to add your first one.
          </p>
        </div>
      )}
    </div>
  );
}
