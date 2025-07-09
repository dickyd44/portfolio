"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgVariant?: "default" | "alternate";
}

export function SectionWrapper({ 
  children, 
  id, 
  className = "", 
  bgVariant = "default" 
}: SectionWrapperProps) {
  const baseClasses = "min-h-screen flex items-center transition-colors duration-300";
  const bgClasses = bgVariant === "alternate" 
    ? "bg-slate-200 dark:bg-gray-800" 
    : "bg-white dark:bg-gray-900";

  return (
    <section 
      id={id} 
      className={`${baseClasses} ${bgClasses} ${className}`}
    >
      <div className="container py-20">
        {children}
      </div>
    </section>
  );
}