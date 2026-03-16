"use client";

import Sidebar from "@/src/components/custom/sidebar/Sidebar";
import FlashcardEditorPanel from "@/src/components/custom/editor/FlashcardEditorPanel";
import SubjectModal from "@/src/components/custom/modals/SubjectModal";
import { SidebarProvider } from "@/data/contexts/SidebarContext";
import { SubjectsProvider } from "@/data/contexts/SubjectsContext";
import { TopicsProvider } from "@/data/contexts/TopicsContext";
import { CardProvider } from "@/data/contexts/CardsContext";
import TopicsModal from "@/src/components/custom/modals/TopicModal";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SubjectsProvider>
        <TopicsProvider>
          <CardProvider>
            <main className="flex min-h-screen w-full bg-background p-6">
              <section className="flex flex-1 gap-6">
                <Sidebar />
                <section className="flex-1 bg-white shadow-md rounded-[2.4rem] p-8 overflow-y-auto">
                  {children}
                </section>
              </section>
            </main>
            {/* Editor is outside the scroll container so it overlays the full viewport */}
            <FlashcardEditorPanel />
            <TopicsModal />
            <SubjectModal />
          </CardProvider>
        </TopicsProvider>
      </SubjectsProvider>
    </SidebarProvider>
  );
}
