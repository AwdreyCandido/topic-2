"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

interface TopicsContextType {
  subjectId: number | null;
  topicModalOpen: boolean;
  openTopicModal: () => void;
  closeTopicModal: () => void;
  selectSubjectId: (subjectId: number) => void;
}

const TopicsContext = createContext({} as TopicsContextType);

export const TopicsProvider = ({ children }: { children: React.ReactNode }) => {
  const [topicModalOpen, setTopicModalOpen] = useState<boolean>(false);
  const [subjectId, setSubjectId] = useState<number | null>(null);

  const openTopicModal = useCallback(() => {
    setTopicModalOpen(true);
  }, []);

  const closeTopicModal = useCallback(() => {
    setTopicModalOpen(false);
  }, []);

  const selectSubjectId = useCallback((subjectId: number) => {
    setSubjectId(subjectId);
  }, []);

  return (
    <TopicsContext.Provider
      value={{
        subjectId,
        topicModalOpen,
        openTopicModal,
        closeTopicModal,
        selectSubjectId,
      }}
    >
      {children}
    </TopicsContext.Provider>
  );
};

export const useTopics = (): TopicsContextType => {
  const context = useContext(TopicsContext);
  if (!context)
    throw new Error("useTopics must be used within a TopicsProvider");
  return context;
};
