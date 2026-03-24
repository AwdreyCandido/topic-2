import { Flashcard } from "../types";

export interface IFlashcardRepository {
  getAllByTopic(topicId: number): Promise<Flashcard[]>;
  getById(id: number): Promise<Flashcard | null>;
  create(data: Omit<Flashcard, "id" | "createdAt" | "updatedAt">): Promise<Flashcard>;
  update(id: number, data: Partial<Flashcard>): Promise<Flashcard>;
  delete(id: number): Promise<void>;
}