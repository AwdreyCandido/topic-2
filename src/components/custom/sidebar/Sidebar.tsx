"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/data/contexts/SidebarContext";
import {
  HiMiniHome,
  HiBars3,
  HiXMark,
  HiUser,
} from "react-icons/hi2";

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const pathname = usePathname();
  // const [openSubjects, setOpenSubjects] = useState<number[]>([]);

  // const toggleSubject = (id: number) => {
  //   setOpenSubjects((prev) =>
  //     prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
  //   );
  // };

  return (
    <aside
      className={`
        flex flex-col items-center gap-8 bg-white shadow-md rounded-[2.4rem] overflow-hidden
        transition-all duration-300 ease-in-out
        ${isExpanded ? "w-[20rem]" : "w-[5rem]"}
      `}
    >
      {/* Toggle */}
      <div className="flex items-center justify-center p-4 h-20">
        <button
          onClick={toggleSidebar}
          className="
            flex items-center justify-center h-12 w-12 rounded-full
            text-[2rem] text-[#525252]
            hover:bg-[#f1f1f1] transition-colors duration-200
          "
        >
          {isExpanded ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 pb-6 gap-6 flex flex-col">
        <Link
          href="/dashboard"
          className={`
            flex items-center gap-3 px-3 py-3 rounded-[0.8rem]
            text-[1.3rem] font-medium transition-colors duration-200
            ${
              pathname === "/dashboard"
                ? "bg-[#f1f1f1] text-[#323232]"
                : "text-[#525252] hover:bg-[#f8f8f8] hover:text-[#323232]"
            }
          `}
        >
          <HiMiniHome className="text-[1.8rem] shrink-0" />
          {isExpanded && <span>Home</span>}
        </Link>

        {/* {deckList.map((subject) => {
          const isSubjectActive = pathname.startsWith(`/dashboard/${subject.path}`);
          const isOpen = openSubjects.includes(subject.id);

          return (
            <div key={subject.id}>
              <div
                className={`
                  flex items-center gap-2 px-3 py-3 rounded-[0.8rem]
                  cursor-pointer transition-colors duration-200
                  ${
                    isSubjectActive
                      ? "bg-[#f1f1f1] text-[#323232]"
                      : "text-[#525252] hover:bg-[#f8f8f8] hover:text-[#323232]"
                  }
                `}
              >
                <Link
                  href={`/dashboard/${subject.path}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <HiMiniBookOpen className="text-[1.8rem] shrink-0" />
                  {isExpanded && (
                    <span className="text-[1.3rem] font-medium truncate">
                      {subject.name}
                    </span>
                  )}
                </Link>
                {isExpanded && (
                  <button
                    onClick={() => toggleSubject(subject.id)}
                    className="shrink-0 p-1 rounded hover:bg-[#e0e0e0] transition-colors"
                  >
                    <HiChevronRight
                      className={`
                        text-[1.4rem] transition-transform duration-200
                        ${isOpen ? "rotate-90" : ""}
                      `}
                    />
                  </button>
                )}
              </div>

              {isExpanded && isOpen && (
                <div className="ml-6 mt-1 flex flex-col gap-1 border-l border-[#e8e8e8] pl-3">
                  {subject.topics.map((topic) => {
                    const isTopicActive =
                      pathname === `/dashboard/${subject.path}/${topic.path}`;
                    return (
                      <Link
                        key={topic.id}
                        href={`/dashboard/${subject.path}/${topic.path}`}
                        className={`
                          px-3 py-2 rounded-[0.6rem] text-small truncate
                          transition-colors duration-200
                          ${
                            isTopicActive
                              ? "bg-[#f1f1f1] text-[#323232] font-medium"
                              : "text-[#525252] hover:bg-[#f8f8f8] hover:text-[#323232]"
                          }
                        `}
                      >
                        {topic.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })} */}
      </nav>

      <div className="flex items-center justify-center p-4 h-20">
        <Link
          href="/profile"
        >
          <button
            className="
            flex items-center justify-center h-12 w-12 rounded-full
            text-[2rem] text-[#525252]
            hover:bg-[#f1f1f1] transition-colors duration-200
          "
          >
            <HiUser />
          </button>
        </Link>
      </div>
    </aside>
  );
}
