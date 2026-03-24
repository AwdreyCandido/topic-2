"use client";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { useCards } from "@/data/contexts/CardsContext";
import { useTopics } from "@/data/contexts/TopicsContext";
import { Topic } from "@/data/types";

export default function TopicsModal() {
  const { topicModalOpen, closeTopicModal, subjectId } = useTopics();
  const { addTopic } = useCards();

  const [topicForm, setTopicForm] = useState<
    Pick<Topic, "name" | "description">
  >({
    name: "",
    description: "",
  });

  const setFormValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    setTopicForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
   
  const handleCreate = () => {
    if (!topicForm.name.trim()) return;

    addTopic(subjectId!, {
      subjectId: subjectId!,
      name: topicForm.name,
      description: topicForm.description,
      path: topicForm.name.toLowerCase().replace(/\s+/g, "-"),
    });

    setTopicForm({
      name: "",
      description: "",
    });
    closeTopicModal();
  };

  return (
    <div
      onClick={closeTopicModal}
      className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
      flex items-center justify-center transition-opacity duration-200
      ${
        topicModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-xl w-full max-w-2xl p-6
        transform transition-all duration-200
        ${topicModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e8e8e8]">
          <span className="px-3 py-1 rounded-full text-[1rem] font-semibold bg-[#E2FBD7] text-[#34B53A]">
            New Topic
          </span>

          <button
            onClick={closeTopicModal}
            className="flex items-center justify-center h-10 w-10 rounded-full text-[1.8rem] text-[#525252] hover:bg-[#f1f1f1]"
          >
            <HiXMark />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 pt-6">
          <input
            name="name"
            value={topicForm.name}
            onChange={setFormValue}
            placeholder="Topic name"
            className="border rounded-lg px-4 py-3 outline-none focus:border-green-500"
          />

          <textarea
            name="description"
            value={topicForm.description}
            onChange={setFormValue}
            placeholder="Description (optional)"
            className="border rounded-lg px-4 py-3 outline-none focus:border-green-500"
          />

          <button
            onClick={handleCreate}
            className="mt-2 bg-dark-gray text-white py-3 duration-200 rounded-lg font-semibold hover:bg-gray"
          >
            Create Topic
          </button>
        </div>
      </div>
    </div>
  );
}
