"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const hackathons = [
  { name: "Nuit de l'info 2025", location: "Valenciennes" },
  { name: "Projet de l'immersion", location: "Valenciennes" },
  { name: "Challenge 48H", location: "Paris" },
];

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
  { name: "Tamoul", level: "Langue maternelle" },
];

const certifications = [
  { name: "Java", issuer: "IBM" },
  { name: "Java", issuer: "OpenClassrooms" },
  { name: "HTML & CSS", issuer: "OpenClassrooms" },
];

export function Extra() {
  return (
    <section id="extra" className="py-32 bg-surface/10 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* HACKATHONS */}
          <div 
            className="md:col-span-1" 
            onMouseEnter={() => window.dispatchEvent(new CustomEvent('avatar-emote', { detail: 'hackathon' }))}
          >
            <FadeIn>
              <h3 className="text-xl font-bold mb-8 border-b border-border pb-4 tracking-tight">Hackathons</h3>
              <ul className="space-y-6">
                {hackathons.map((hack, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col group cursor-default"
                  >
                    <span className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">{hack.name}</span>
                    <span className="text-sm font-light text-foreground/50">{hack.location}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* LANGUAGES */}
          <div className="md:col-span-1">
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-bold mb-8 border-b border-border pb-4 tracking-tight">Langues</h3>
              <ul className="space-y-6">
                {languages.map((lang, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col group cursor-default"
                  >
                    <span className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">{lang.name}</span>
                    <span className="text-sm font-light text-foreground/50">{lang.level}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* CERTIFICATIONS */}
          <div className="md:col-span-1">
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-bold mb-8 border-b border-border pb-4 tracking-tight">Certifications</h3>
              <ul className="space-y-6">
                {certifications.map((cert, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col group cursor-default"
                  >
                    <span className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">{cert.name}</span>
                    <span className="text-sm font-light text-foreground/50">{cert.issuer}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
