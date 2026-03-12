# Flashcards App

A subject-based flashcard study app built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  dashboard/                  # Main dashboard (subjects grid)
    [subject]/                # Topics grid for a subject
      [topic]/                # Flashcards grid for a topic
    layout.tsx                # Shared layout with sidebar + editor panel
data/
  types.ts                    # Subject, Topic, Flashcard, Tag interfaces
  data.ts                     # Sample deck data
  contexts/
    CardsContext.tsx           # Full deck state + CRUD + editor open/close
    SidebarContext.tsx         # Sidebar expand/collapse
src/components/custom/
  sidebar/Sidebar.tsx         # Collapsible nav with subject/topic tree
  editor/FlashcardEditorPanel.tsx  # Slide-in edit panel
  breadcrumb/Breadcrumb.tsx
  subject-card/SubjectCard.tsx
  topic-card/TopicCard.tsx
  card/Card.tsx
```

## Features

- Browse subjects → topics → flashcards
- Click any flashcard to edit it in a slide-in panel
- Create new flashcards with the "New Flashcard" button
- Delete flashcards from the editor panel
- Sidebar collapses to icon-only mode; expands to show subject/topic tree
- All state is in-memory (no backend yet)

## Roadmap

- [ ] Rich text / block editor for card answers (Notion-style)
- [ ] Persistent storage (database or localStorage)
- [ ] Create/rename/delete subjects and topics via UI
- [ ] Tag system
- [ ] Study/quiz mode
