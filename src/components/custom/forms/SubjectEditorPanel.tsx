"use client";

import { useState } from "react";
import { useSubjects } from "@/data/contexts/SubjectsContext";
import { HiXMark } from "react-icons/hi2";
import { useCards } from "@/data/contexts/CardsContext";
import { Subject } from "@/data/types";

export default function SubjectEditorPanel() {
  const { editorOpen, closeEditor } = useSubjects();
  const { addSubject } = useCards();

  const [subjectForm, setSubjectForm] = useState<
    Pick<Subject, "name" | "description">
  >({
    name: "",
    description: "",
  });

  const setFormValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;

    setSubjectForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    if (!subjectForm.name.trim()) return;

    addSubject({
      name: subjectForm.name,
      description: subjectForm.description,
      path: subjectForm.name.toLowerCase().replace(/\s+/g, "-"),
    });

    setSubjectForm({
      name: "",
      description: "",
    });
    closeEditor()
  };

  return (
    <div
      onClick={closeEditor}
      className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
      flex items-center justify-center transition-opacity duration-200
      ${editorOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-xl w-full max-w-2xl p-6
        transform transition-all duration-200
        ${editorOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e8e8e8]">
          <span className="px-3 py-1 rounded-full text-[1rem] font-semibold bg-[#E2FBD7] text-[#34B53A]">
            New Subject
          </span>

          <button
            onClick={closeEditor}
            className="flex items-center justify-center h-10 w-10 rounded-full text-[1.8rem] text-[#525252] hover:bg-[#f1f1f1]"
          >
            <HiXMark />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 pt-6">
          <input
            name="name"
            value={subjectForm.name}
            onChange={setFormValue}
            placeholder="Subject name"
            className="border rounded-lg px-4 py-3 outline-none focus:border-green-500"
          />

          <textarea
            name="description"
            value={subjectForm.description}
            onChange={setFormValue}
            placeholder="Description (optional)"
            className="border rounded-lg px-4 py-3 outline-none focus:border-green-500"
          />

          <button
            onClick={handleCreate}
            className="mt-2 bg-[#34B53A] text-white py-3 rounded-lg font-semibold hover:bg-[#2fa334]"
          >
            Create Subject
          </button>
        </div>
      </div>
    </div>
  );
}
