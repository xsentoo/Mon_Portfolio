"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Développeur Full Stack",
    company: "ÔPM",
    date: "2023 - 2024",
    description: "Startup dédiée à l'optimisation UX et e-commerce. Assistant du développeur lead sur le déploiement d'une application React, intégration de maquettes Figma et développement/consommation d'API REST."
  }
];

const education = [
  {
    role: "Master Sc. et techno du Métavers",
    company: "INSA Haute de France",
    date: "2025 - 2027",
    description: "Formation ingénieur axée sur les mondes virtuels, les environnements 3D immersifs et architectures de données distribuées."
  },
  {
    role: "Bachelor 3 Développement Informatique",
    company: "Ynov Paris",
    date: "2024 - 2025",
    description: "Spécialisation dans le développement logiciel moderne, la sécurité et l'architecture web full stack."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* PARCOURS PROFESSIONNEL */}
        <div className="mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
              Expérience Pro.
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} direction="up" className="relative pl-8 md:pl-0 group">
                
                {/* Timeline Line - Outside motion.div to preserve absolute positioning context */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:hidden group-hover:bg-foreground/20 transition-colors" />
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-[-4px] top-[14px] w-2 h-2 rounded-full bg-foreground md:hidden" 
                />

                <motion.div 
                  whileHover={{ x: 10 }}
                  onMouseEnter={() => exp.company === "ÔPM" && window.dispatchEvent(new CustomEvent('avatar-emote', { detail: 'opm' }))}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="md:grid md:grid-cols-4 md:gap-8 items-baseline"
                >
                  <div className="mb-4 md:mb-0 col-span-1 text-sm font-medium uppercase tracking-widest text-foreground/50 hidden md:block">
                    {exp.date}
                  </div>
                  
                  <div className="col-span-3 pb-8 md:border-b md:border-border group-hover:border-foreground/20 transition-colors">
                    <div className="block md:hidden text-xs font-medium uppercase tracking-widest text-foreground/50 mb-2">
                      {exp.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-foreground transition-colors">{exp.role}</h3>
                    <div className="text-lg text-foreground/70 mb-4 font-medium transition-colors">{exp.company}</div>
                    <p className="text-foreground/60 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ÉDUCATION */}
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
              Éducation.
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} direction="up" className="relative pl-8 md:pl-0 group">
                
                {/* Timeline Line - Outside motion.div */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:hidden group-hover:bg-foreground/20 transition-colors" />
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-[-4px] top-[14px] w-2 h-2 rounded-full bg-border md:hidden group-hover:bg-foreground transition-colors" 
                />

                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="md:grid md:grid-cols-4 md:gap-8 items-baseline"
                >
                  <div className="mb-4 md:mb-0 col-span-1 text-sm font-medium uppercase tracking-widest text-foreground/50 hidden md:block">
                    {edu.date}
                  </div>
                  
                  <div className="col-span-3 pb-8 md:border-b md:border-border group-hover:border-foreground/20 transition-colors">
                    <div className="block md:hidden text-xs font-medium uppercase tracking-widest text-foreground/50 mb-2">
                      {edu.date}
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-foreground transition-colors">{edu.role}</h3>
                    <div className="text-md text-foreground/70 mb-3 font-medium transition-colors">{edu.company}</div>
                    <p className="text-foreground/60 font-light leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
