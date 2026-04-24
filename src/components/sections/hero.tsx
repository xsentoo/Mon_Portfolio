"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl -z-10 animate-fade-in" 
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <FadeIn delay={0.2}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-surface text-xs font-medium uppercase tracking-widest text-foreground/70 mb-8 cursor-default"
          >
            Recherche d'une alternance en Master 2 (Septembre 2026)
          </motion.div>
        </FadeIn>
        
        <FadeIn delay={0.3} direction="up" className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
            Thayaparan <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="inline-block text-foreground/40 italic"
            >
              Senthooran
            </motion.span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} direction="up" className="max-w-xl mx-auto">
          <p className="text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed font-light text-balance">
            Développeur Full Stack basé à Noisy-le-Grand. Je conçois et déploie des applications modernes avec un focus sur la performance, les architectures scalables et l'expérience utilisateur.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 md:px-8 py-3 md:py-4 bg-foreground text-background font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Voir mes projets
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--foreground)", color: "var(--background)" }}
            whileTap={{ scale: 0.95 }}
            href="/blog"
            className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-foreground border border-border font-medium rounded-full transition-colors duration-300"
          >
            Mon Blog
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--foreground)", color: "var(--background)" }}
            whileTap={{ scale: 0.95 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=senthooran.thayaparan.pro@gmail.com"
            target="_blank"
            className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-foreground border border-border font-medium rounded-full transition-colors duration-300"
          >
            Me Contacter
          </motion.a>
        </FadeIn>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium text-foreground/40">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
