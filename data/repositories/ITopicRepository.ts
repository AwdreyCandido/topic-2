import { Topic } from "../types";

export interface ITopicRepository {
  getAllBySubject(subjectId: number): Promise<Topic[]>;
  getByPath(subjectId: number, path: string): Promise<Topic | null>;
  create(data: Omit<Topic, "id" | "createdAt" | "updatedAt">): Promise<Topic>;
  update(id: number, data: Partial<Topic>): Promise<Topic>;
  delete(id: number): Promise<void>;
}
