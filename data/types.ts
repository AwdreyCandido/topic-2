export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  topicId: number;
  tags: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Topic {
  id: number;
  name: string;
  path: string;
  description?: string;
  subjectId: number;
  flashcards: Flashcard[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Subject {
  id: number;
  name: string;
  path: string;
  description?: string;
  topics: Topic[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ITag {
  id: number;
  name: string;
  color: string;
}
