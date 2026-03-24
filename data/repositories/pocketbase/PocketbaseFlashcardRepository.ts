import PocketBase from "pocketbase"

import { IFlashcardRepository } from "../IFlashcardRepository";
import { Flashcard } from "@/data/types";

export class PocketbaseFlashcardRepository implements IFlashcardRepository {

  constructor(private pb: PocketBase) {}
  getAllByTopic(topicId: number): Promise<Flashcard[]> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<Flashcard | null> {
    throw new Error("Method not implemented.");
  }
  create(data: Omit<Flashcard, "id" | "createdAt" | "updatedAt">): Promise<Flashcard> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: Partial<Flashcard>): Promise<Flashcard> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

}