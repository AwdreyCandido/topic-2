"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { useCards } from "./CardsContext";

interface SubjectsContextType {
  editorOpen: boolean;
  openEditor: () => void;
  closeEditor: () => void;
}

const SubjectsContext = createContext({} as SubjectsContextType);

export const SubjectsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const { addSubject } = useCards();

  const openEditor = useCallback(() => {
    setEditorOpen(true);
  }, []);

  const closeEditor = useCallback(() => {
    setEditorOpen(false);
  }, []);

  return (
    <SubjectsContext.Provider
      value={{
        editorOpen,
        openEditor,
        closeEditor,
      }}
    >
      {children}
    </SubjectsContext.Provider>
  );
};

export const useSubjects = (): SubjectsContextType => {
  const context = useContext(SubjectsContext);
  if (!context)
    throw new Error("useSubjects must be used within a SubjectsProvider");
  return context;
};
