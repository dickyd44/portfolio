"use client";
import { useState } from "react";
import { AppFooter, AppNavbar, AppSidebar } from "@/src/layouts";
import RootLayout from "./root-layout";
import LoadingScreen from "@/src/components/atoms/loading-screen";
import { useLoadingScreen } from "@/src/store/loading-screen";
import { ThemeToggle } from "@/src/components/atoms/theme-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoading } = useLoadingScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <RootLayout>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <AppSidebar isOpen={isSidebarOpen} />
          <div className="flex-col w-full lg:ml-24 overflow-hidden">
            <AppNavbar toggleSidebar={toggleSidebar} />
            {children}
            <AppFooter />
          </div>
          <ThemeToggle />
        </div>
      )}
    </RootLayout>
  );
}
