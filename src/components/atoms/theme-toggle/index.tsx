"use client";
import { useThemeStore } from "@/src/store/theme";
import { SunIcon, MoonIcon } from "@/src/assets/icon/icon-theme";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 lg:top-8 lg:right-8 rounded-full shadow-lg hover:shadow-xl z-[9998]"
      asChild
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </motion.button>
    </Button>
  );
}