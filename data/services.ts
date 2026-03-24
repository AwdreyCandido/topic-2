import Pocketbase from "pocketbase";

import { PocketbaseSubjectRepository } from "./repositories/pocketbase/PocketbaseSubjectRepository";
import { PocketbaseTopicRepository } from "./repositories/pocketbase/PocketbaseTopicRepository";
import { PocketbaseFlashcardRepository } from "./repositories/pocketbase/PocketbaseFlashcardRepository";

const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

/* REPOSITORIES */
export const subjectRepository = new PocketbaseSubjectRepository(pb);
export const topicRepository = new PocketbaseTopicRepository(pb);
export const flashcardRepository = new PocketbaseFlashcardRepository(pb);

/* SERVICES */
export const subjectService = null;
export const topicService = null;
export const flashcardService = null;
