"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-2xl mx-auto leading-tight">
            Prêt à collaborer sur de nouveaux défis ?
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-lg text-background/60 mb-12 font-light max-w-xl mx-auto">
            Toujours ouvert aux opportunités en tant que développeur, n'hésitez pas à me contacter via email ou sur mes réseaux.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-col items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=senthooran.thayaparan.pro@gmail.com"
            target="_blank" 
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-full text-lg mb-8 shadow-xl shadow-background/5"
          >
            Me Contacter 
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Mail className="ml-3 w-5 h-5" />
            </motion.div>
          </motion.a>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/senthooran-thayaparan/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center px-6 py-3 border border-background/20 rounded-full hover:bg-background/10 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-background/70 group-hover:text-background transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="font-medium text-background/90 group-hover:text-background transition-colors">LinkedIn</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/xsentoo" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center px-6 py-3 border border-background/20 rounded-full hover:bg-background/10 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-background/70 group-hover:text-background transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="font-medium text-background/90 group-hover:text-background transition-colors">GitHub</span>
            </motion.a>
          </div>

          <p className="text-background/40">Ou appelez-moi : <span className="text-background/80">07 82 18 26 57</span></p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-24 pt-8 border-t border-background/10">
          <div className="text-background/30 text-sm font-light">
            © {new Date().getFullYear()} Thayaparan Senthooran. Tous droits réservés.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
