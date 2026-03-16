"use client";

import { useEffect, useState } from "react";
import { useCards } from "@/data/contexts/CardsContext";
import { Flashcard } from "@/data/types";
import { HiXMark, HiTrash, HiCheckCircle } from "react-icons/hi2";

export default function FlashcardEditorPanel() {
  const { editorOpen, editingFlashcard, closeEditor, saveFlashcard, deleteFlashcard } =
    useCards();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (editingFlashcard) {
      setQuestion(editingFlashcard.question);
      setAnswer(editingFlashcard.answer);
      setIsDirty(false);
    }
  }, [editingFlashcard]);

  const handleSave = () => {
    if (!editingFlashcard || !question.trim()) return;
    const updated: Flashcard = {
      ...editingFlashcard,
      question: question.trim(),
      answer: answer.trim(),
    };
    saveFlashcard(updated);
  };

  const handleDelete = () => {
    if (!editingFlashcard) return;
    if (confirm("Delete this flashcard?")) {
      deleteFlashcard(editingFlashcard.id, editingFlashcard.topicId);
      closeEditor();
    }
  };

  const isNew = editingFlashcard
    ? !editingFlashcard.question && !editingFlashcard.answer
    : false;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeEditor}
        className={`
          fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]
          transition-opacity duration-300
          ${editorOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full z-50
          w-full max-w-[60rem] bg-white
          shadow-[-8px_0_32px_rgba(0,0,0,0.12)]
          flex flex-col
          transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${editorOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#e8e8e8]">
          <div className="flex items-center gap-3">
            <span
              className={`
                inline-block px-3 py-1 rounded-full text-[1.1rem] font-semibold
                ${isNew ? "bg-[#DAD7FE] text-[#4339F2]" : "bg-[#E2FBD7] text-[#34B53A]"}
              `}
            >
              {isNew ? "New Card" : "Edit Card"}
            </span>
            {isDirty && (
              <span className="text-[1.1rem] text-[#a3a3a3]">Unsaved changes</span>
            )}
          </div>
          <button
            onClick={closeEditor}
            className="
              flex items-center justify-center h-10 w-10 rounded-full
              text-[1.8rem] text-[#525252]
              hover:bg-[#f1f1f1] transition-colors duration-200
            "
          >
            <HiXMark />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-small font-semibold text-[#525252] uppercase tracking-wider">
              Question
            </label>
            <textarea
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setIsDirty(true);
              }}
              placeholder="What do you want to remember?"
              rows={4}
              className="
                w-full resize-none
                bg-[#f8f8f8] border border-[#e0e0e0]
                rounded-[1rem] p-4
                text-[1.4rem] text-[#323232] leading-relaxed
                placeholder:text-[#c2c2c2]
                focus:outline-none focus:border-gray focus:bg-white
                transition-all duration-200
              "
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#e8e8e8]" />
            <span className="text-[1.1rem] font-semibold text-[#c2c2c2] uppercase tracking-widest">
              Answer
            </span>
            <div className="flex-1 h-px bg-[#e8e8e8]" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-small font-semibold text-[#525252] uppercase tracking-wider">
              Answer
            </label>
            <textarea
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setIsDirty(true);
              }}
              placeholder="Explain the answer clearly..."
              rows={8}
              className="
                w-full resize-none
                bg-[#f8f8f8] border border-[#e0e0e0]
                rounded-[1rem] p-4
                text-[1.4rem] text-[#323232] leading-relaxed
                placeholder:text-[#c2c2c2]
                focus:outline-none focus:border-gray focus:bg-white
                transition-all duration-200
              "
            />
            <p className="text-[1.1rem] text-[#c2c2c2]">
              💡 Rich text / block editor coming soon — code blocks, lists, and more.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-[#e8e8e8] flex items-center justify-between">
          {!isNew ? (
            <button
              onClick={handleDelete}
              className="
                flex items-center gap-2 px-4 py-3 rounded-[0.8rem]
                text-[1.3rem] font-medium text-[#FF3A29]
                hover:bg-[#FFE5D3] transition-colors duration-200
              "
            >
              <HiTrash className="text-[1.6rem]" />
              Delete
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={closeEditor}
              className="
                px-5 py-3 rounded-[0.8rem]
                text-[1.3rem] font-medium text-[#525252]
                hover:bg-[#f1f1f1] transition-colors duration-200
              "
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!question.trim()}
              className="
                flex items-center gap-2 px-6 py-3 rounded-[0.8rem]
                text-[1.3rem] font-semibold text-white bg-[#323232]
                hover:bg-[#525252]
                disabled:opacity-40 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <HiCheckCircle className="text-[1.6rem]" />
              Save Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
