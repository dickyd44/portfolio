"use client";
import { useState } from "react";
import { AppFooter, AppNavbar, AppSidebar } from "@/src/layouts";
import RootLayout from "./root-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <RootLayout>
      <div className="flex">
        <AppSidebar isOpen={isSidebarOpen} />
        <div className="flex-col w-full lg:ml-24 overflow-auto">
          <AppNavbar toggleSidebar={toggleSidebar} />
          {children}
          <AppFooter />
        </div>
      </div>
    </RootLayout>
  );
}
