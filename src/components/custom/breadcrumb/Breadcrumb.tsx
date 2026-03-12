"use client";

import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-1 text-small text-[#a3a3a3]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1">
            {index > 0 && (
              <HiChevronRight className="text-[1.4rem] text-[#c2c2c2]" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#323232] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-[#323232] font-medium" : ""}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
