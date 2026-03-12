"use client";

import { SidebarProvider } from "@/data/contexts/SidebarContext";
import { CardProvider } from "@/data/contexts/CardsContext";
import Sidebar from "@/src/components/custom/sidebar/Sidebar";
import FlashcardEditorPanel from "@/src/components/custom/editor/FlashcardEditorPanel";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
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
      </CardProvider>
    </SidebarProvider>
  );
}
