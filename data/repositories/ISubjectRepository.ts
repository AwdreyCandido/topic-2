import { Subject } from "../types";

export interface ISubjectRepository {
  getAll(): Promise<Subject[]>;
  getByPath(path: string): Promise<Subject | null>;
  create(data: Omit<Subject, "id" | "createdAt" | "updatedAt">): Promise<Subject>;
  update(id: number, data: Partial<Subject>): Promise<Subject>;
  delete(id: number): Promise<void>;
}