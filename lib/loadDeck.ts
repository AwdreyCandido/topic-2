import { pb } from "./pocketbase";

export async function loadDeck() {
  const subjects = await pb.collection("subjects").getFullList({
    expand: "topics_via_subject.flashcards_via_topic.tags",
  });
  return subjects;
}
