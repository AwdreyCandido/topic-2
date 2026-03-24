import PocketBase from "pocketbase";
import { ITopicRepository } from "../ITopicRepository";
import { Topic } from "@/data/types";

export class PocketbaseTopicRepository implements ITopicRepository {
  constructor(private pb: PocketBase) {}
  
  getAllBySubject(subjectId: number): Promise<Topic[]> {
    throw new Error("Method not implemented.");
  }
  getByPath(subjectId: number, path: string): Promise<Topic | null> {
    throw new Error("Method not implemented.");
  }
  create(data: Omit<Topic, "id" | "createdAt" | "updatedAt">): Promise<Topic> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: Partial<Topic>): Promise<Topic> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}
