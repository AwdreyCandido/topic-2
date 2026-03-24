import PocketBase from "pocketbase";
import { ISubjectRepository } from "../ISubjectRepository";
import { Subject } from "@/data/types";

export class PocketbaseSubjectRepository implements ISubjectRepository {
  constructor(private pb: PocketBase) {}
  
  getAll(): Promise<Subject[]> {
    throw new Error("Method not implemented.");
  }
  getByPath(path: string): Promise<Subject | null> {
    throw new Error("Method not implemented.");
  }
  create(data: Omit<Subject, "id" | "createdAt" | "updatedAt">): Promise<Subject> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: Partial<Subject>): Promise<Subject> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
