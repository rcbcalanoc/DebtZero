import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileDrawer } from "./MobileDrawer";

export function ContentContainer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--color-bg)]">
      <Sidebar />
      <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header setDrawerOpen={setDrawerOpen} />
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}