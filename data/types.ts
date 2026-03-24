export interface Flashcard {
  id: number | string;
  question: string;
  answer: string;
  topicId: number;
  tags: number[] | string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Topic {
  id: number | string;
  name: string;
  path: string;
  description?: string;
  subjectId: number;
  flashcards: Flashcard[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Subject {
  id: number | string;
  name: string;
  path: string;
  description?: string;
  topics: Topic[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ITag {
  id: number | string;
  name: string;
  color: string;
}
