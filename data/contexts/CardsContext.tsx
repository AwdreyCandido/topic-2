"use client";

import { JSX, createContext, useContext, useState, useCallback } from "react";
import { sampleDeck } from "../data";
import { Subject, Topic, Flashcard } from "../types";

interface CardContextType {
  deckList: Subject[];
  getSubjectByPath: (path: string) => Subject | undefined;
  getTopicByPath: (subjectPath: string, topicPath: string) => Topic | undefined;
  editorOpen: boolean;
  editingFlashcard: Flashcard | null;
  openEditor: (flashcard: Flashcard) => void;
  openNewCardEditor: (topicId: number) => void;
  closeEditor: () => void;
  saveFlashcard: (flashcard: Flashcard) => void;
  deleteFlashcard: (flashcardId: number, topicId: number) => void;
  addTopic: (
    subjectId: number,
    topic: Omit<Topic, "id" | "createdAt" | "updatedAt" | "flashcards">
  ) => void;
  addSubject: (
    subject: Omit<Subject, "id" | "createdAt" | "updatedAt" | "topics">
  ) => void;
}

const CardContext = createContext({} as CardContextType);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [deckList, setDeckList] = useState<Subject[]>(sampleDeck);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingFlashcard, setEditingFlashcard] = useState<Flashcard | null>(null);

  const getSubjectByPath = useCallback(
    (path: string) => deckList.find((s) => s.path === path),
    [deckList]
  );

  const getTopicByPath = useCallback(
    (subjectPath: string, topicPath: string) => {
      const subject = deckList.find((s) => s.path === subjectPath);
      return subject?.topics.find((t) => t.path === topicPath);
    },
    [deckList]
  );

  const openEditor = useCallback((flashcard: Flashcard) => {
    setEditingFlashcard(flashcard);
    setEditorOpen(true);
  }, []);

  const openNewCardEditor = useCallback((topicId: number) => {
    setEditingFlashcard({
      id: Date.now(),
      question: "",
      answer: "",
      topicId,
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    setEditorOpen(true);
  }, []);

  const closeEditor = useCallback(() => {
    setEditorOpen(false);
    setTimeout(() => setEditingFlashcard(null), 300);
  }, []);

  const saveFlashcard = useCallback(
    (flashcard: Flashcard) => {
      setDeckList((prev) =>
        prev.map((subject) => ({
          ...subject,
          topics: subject.topics.map((topic) => {
            if (topic.id !== flashcard.topicId) return topic;
            const exists = topic.flashcards.some((f) => f.id === flashcard.id);
            const updated = { ...flashcard, updatedAt: new Date() };
            return {
              ...topic,
              updatedAt: new Date(),
              flashcards: exists
                ? topic.flashcards.map((f) => (f.id === flashcard.id ? updated : f))
                : [...topic.flashcards, updated],
            };
          }),
        }))
      );
      closeEditor();
    },
    [closeEditor]
  );

  const deleteFlashcard = useCallback((flashcardId: number, topicId: number) => {
    setDeckList((prev) =>
      prev.map((subject) => ({
        ...subject,
        topics: subject.topics.map((topic) => {
          if (topic.id !== topicId) return topic;
          return {
            ...topic,
            updatedAt: new Date(),
            flashcards: topic.flashcards.filter((f) => f.id !== flashcardId),
          };
        }),
      }))
    );
  }, []);

  const addTopic = useCallback(
    (
      subjectId: number,
      topicData: Omit<Topic, "id" | "createdAt" | "updatedAt" | "flashcards">
    ) => {
      const newTopic: Topic = {
        ...topicData,
        id: Date.now(),
        flashcards: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setDeckList((prev) =>
        prev.map((s) =>
          s.id === subjectId ? { ...s, topics: [...s.topics, newTopic] } : s
        )
      );
    },
    []
  );

  const addSubject = useCallback(
    (subjectData: Omit<Subject, "id" | "createdAt" | "updatedAt" | "topics">) => {
      const newSubject: Subject = {
        ...subjectData,
        id: Date.now(),
        topics: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setDeckList((prev) => [...prev, newSubject]);
    },
    []
  );

  return (
    <CardContext.Provider
      value={{
        deckList,
        getSubjectByPath,
        getTopicByPath,
        editorOpen,
        editingFlashcard,
        openEditor,
        openNewCardEditor,
        closeEditor,
        saveFlashcard,
        deleteFlashcard,
        addTopic,
        addSubject,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCards = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCards must be used within a CardProvider");
  return context;
};
