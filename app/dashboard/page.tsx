"use client";

import { useCards } from "@/data/contexts/CardsContext";
import { useSubjects } from "@/data/contexts/SubjectsContext";
import SubjectCard from "@/src/components/custom/subject-card/SubjectCard";
import { HiMiniPlus } from "react-icons/hi2";

export default function Dashboard() {
  const { deckList } = useCards();
  const { openEditor } = useSubjects();


  return (
    <div className="pb-4">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-[3.2rem] font-semibold">All Subjects</h1>
        <button
          onClick={openEditor}
          className="
            flex items-center gap-2 px-5 py-3
            bg-[#323232] text-white rounded-[0.8rem]
            text-[1.6rem] font-medium
            hover:bg-[#525252] transition-colors duration-200
          "
        >
          <HiMiniPlus className="text-[1.8rem]" />
          New Subject
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(26rem,1fr))] gap-4">
        {deckList.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>

      {deckList.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-[#c2c2c2]">
          <p className="text-[2rem]">No subjects yet.</p>
          <p className="text-[1.4rem] mt-1">Create your first subject to get started.</p>
        </div>
      )}
    </div>
  );
}
