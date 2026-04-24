"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navbar({ hideLinks = false }: { hideLinks?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-center md:justify-between">
        <div className="hidden md:block w-[120px]"></div> {/* Spacer for perfect centering */}
        
        {!hideLinks ? (
          <nav className={cn(
            "flex items-center space-x-6 px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto",
            scrolled ? "glass" : "bg-transparent"
          )}>
            {["À propos", "Compétences", "Projets", "Parcours"].map((item) => {
              const anchor = item === "À propos" ? "/#about" : item === "Compétences" ? "/#skills" : item === "Projets" ? "/#projects" : "/#experience";
              return (
                <a
                  key={item}
                  href={anchor}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </nav>
        ) : (
          <div className="flex-1"></div>
        )}

        <div className="hidden md:flex w-[120px] justify-end pointer-events-auto">
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=senthooran.thayaparan.pro@gmail.com" className="inline-flex px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:scale-105 transition-transform duration-300">
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
