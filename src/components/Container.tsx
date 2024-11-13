import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Define an interface for the props
interface ContainerProps {
  children: ReactNode; // Accept children as a prop
  className?: string; // Accept an optional className prop
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <main className={cn(`container mx-auto px-4 ${className}`)}>
      {children}
    </main>
  ); // Include className in the main element
};

export default Container;
