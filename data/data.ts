import { Subject } from "./types";

export const sampleDeck: Subject[] = [
  {
    id: 1,
    name: "Web Development",
    path: "web-development",
    description: "Frontend and Backend concepts",
    topics: [
      {
        id: 1,
        name: "JavaScript Basics",
        path: "javascript-basics",
        description: "Flashcards covering fundamental JavaScript concepts",
        subjectId: 1,
        flashcards: [
          {
            id: 101,
            question: "What is a closure?",
            answer:
              "A closure is a function that retains access to its lexical scope, even when executed outside that scope. This allows inner functions to remember variables from their enclosing scope.",
            topicId: 1,
            tags: [1, 3],
            createdAt: new Date("2025-04-01T12:00:00Z"),
            updatedAt: new Date("2025-04-01T12:00:00Z"),
          },
          {
            id: 102,
            question: "What is async/await in JavaScript?",
            answer:
              "async/await is syntactic sugar over Promises that allows you to write asynchronous code in a synchronous style. An async function always returns a Promise, and await pauses execution until the Promise resolves.",
            topicId: 1,
            tags: [1],
            createdAt: new Date("2025-04-02T10:00:00Z"),
            updatedAt: new Date("2025-04-02T10:00:00Z"),
          },
          {
            id: 103,
            question: "What is the difference between == and === in JavaScript?",
            answer:
              "== performs loose equality with type coercion, while === performs strict equality without type coercion. It is generally safer to use === to avoid unexpected behavior.",
            topicId: 1,
            tags: [1],
            createdAt: new Date("2025-04-03T09:00:00Z"),
            updatedAt: new Date("2025-04-03T09:00:00Z"),
          },
          {
            id: 104,
            question: "What is event delegation?",
            answer:
              "Event delegation is a technique where a single event listener is attached to a parent element to handle events from its children. It leverages event bubbling and is more efficient than adding listeners to each child.",
            topicId: 1,
            tags: [1, 3],
            createdAt: new Date("2025-04-04T11:00:00Z"),
            updatedAt: new Date("2025-04-04T11:00:00Z"),
          },
        ],
        createdAt: new Date("2025-04-01T12:00:00Z"),
        updatedAt: new Date("2025-04-01T12:00:00Z"),
      },
      {
        id: 2,
        name: "React Fundamentals",
        path: "react-fundamentals",
        description: "Flashcards covering React.js basics",
        subjectId: 1,
        flashcards: [
          {
            id: 201,
            question: "What is the virtual DOM?",
            answer:
              "The virtual DOM is a lightweight JavaScript representation of the real DOM that allows React to efficiently update the UI by diffing the virtual tree and only applying minimal real DOM changes.",
            topicId: 2,
            tags: [2],
            createdAt: new Date("2025-04-01T12:10:00Z"),
            updatedAt: new Date("2025-04-01T12:10:00Z"),
          },
          {
            id: 202,
            question: "What are React hooks?",
            answer:
              "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext, useRef, and useMemo.",
            topicId: 2,
            tags: [2],
            createdAt: new Date("2025-04-02T12:10:00Z"),
            updatedAt: new Date("2025-04-02T12:10:00Z"),
          },
          {
            id: 203,
            question: "What is the difference between props and state?",
            answer:
              "Props are read-only inputs passed from parent to child components. State is mutable data managed within a component. Props flow downward; state is local and triggers re-renders when updated.",
            topicId: 2,
            tags: [2],
            createdAt: new Date("2025-04-03T12:10:00Z"),
            updatedAt: new Date("2025-04-03T12:10:00Z"),
          },
        ],
        createdAt: new Date("2025-04-01T12:10:00Z"),
        updatedAt: new Date("2025-04-01T12:10:00Z"),
      },
      {
        id: 3,
        name: "CSS & Styling",
        path: "css-styling",
        description: "Modern CSS techniques and best practices",
        subjectId: 1,
        flashcards: [
          {
            id: 301,
            question: "What is the CSS box model?",
            answer:
              "The box model describes how every HTML element is a rectangular box consisting of content, padding, border, and margin — in that order from inside out.",
            topicId: 3,
            tags: [3],
            createdAt: new Date("2025-04-05T10:00:00Z"),
            updatedAt: new Date("2025-04-05T10:00:00Z"),
          },
        ],
        createdAt: new Date("2025-04-05T10:00:00Z"),
        updatedAt: new Date("2025-04-05T10:00:00Z"),
      },
    ],
    createdAt: new Date("2025-04-01T12:00:00Z"),
    updatedAt: new Date("2025-04-01T12:00:00Z"),
  },
  {
    id: 2,
    name: "Computer Science",
    path: "computer-science",
    description: "Core CS concepts and algorithms",
    topics: [
      {
        id: 4,
        name: "Data Structures",
        path: "data-structures",
        description: "Arrays, linked lists, trees, graphs",
        subjectId: 2,
        flashcards: [
          {
            id: 401,
            question: "What is a hash table?",
            answer:
              "A hash table is a data structure that maps keys to values using a hash function. It provides average O(1) time complexity for insertions, deletions, and lookups.",
            topicId: 4,
            tags: [],
            createdAt: new Date("2025-04-06T10:00:00Z"),
            updatedAt: new Date("2025-04-06T10:00:00Z"),
          },
          {
            id: 402,
            question: "What is a binary search tree?",
            answer:
              "A BST is a tree where each node's left subtree contains only nodes with smaller values, and the right subtree only nodes with larger values. This enables O(log n) average search time.",
            topicId: 4,
            tags: [],
            createdAt: new Date("2025-04-07T10:00:00Z"),
            updatedAt: new Date("2025-04-07T10:00:00Z"),
          },
        ],
        createdAt: new Date("2025-04-06T10:00:00Z"),
        updatedAt: new Date("2025-04-06T10:00:00Z"),
      },
    ],
    createdAt: new Date("2025-04-06T10:00:00Z"),
    updatedAt: new Date("2025-04-06T10:00:00Z"),
  },
];
