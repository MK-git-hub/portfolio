"use client";

import { ReactNode, useState } from "react";

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export default function Tabs({ items, initialId }: { items: TabItem[]; initialId?: string }) {
  const [activeId, setActiveId] = useState<string>(initialId ?? items[0]?.id ?? "");

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 border-b border-black/10 dark:border-white/15 mb-4">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={
                "px-4 py-2 rounded-t-md text-sm font-medium transition-colors " +
                (isActive
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-black dark:text-white")
              }
              aria-pressed={isActive}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="rounded-md border border-black/10 dark:border-white/15 p-4">
        {items.find((i) => i.id === activeId)?.content}
      </div>
    </div>
  );
}


