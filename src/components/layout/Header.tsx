import { Menu, Bell } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export function Header({ setDrawerOpen }: { setDrawerOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-bg px-4 py-4 md:px-8">
      <button
        onClick={() => setDrawerOpen(true)}
        className="texttext md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="hidden md:block">
        <p className="text-sm text text]">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </p>
      </div>
      <button className="relative text text hover:text-text" aria-label="Notifications">
        <Bell className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-danger]" />
      </button>
    </header>
  );
}