"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "WheelsOn66",
    slug: "wheelson66",
    description: "Application mobile sociale de planification de road trips. Architecture microservices avec Spring Cloud, messages asynchrones via Kafka, requêtes optimisées ElasticSearch, et conteneurisation Docker.",
    tech: ["Java", "Spring Boot", "React Native", "Kafka", "Docker", "PostgreSQL"],
    github: "https://github.com/xsentoo/WheelsOn66Front"
  },
  {
    title: "HackZone",
    slug: "hackzone",
    description: "Application 'Learning by Doing' sécurisée (JWT, OWASP) pour former aux attaques éthiques. Architecture stateless incluant un système anti-triche et de gamification en temps réel.",
    tech: ["Java", "Spring Boot", "JWT", "Securité"],
    github: "https://github.com/xsentoo/HackZone-Global"
  },
  {
    title: "Blockchain Project",
    slug: "blockchain-project",
    description: "Projet éducatif simulant le fonctionnement complet d'une blockchain avec système de minage par Preuve de Travail (Proof of Work) et transactions en P2P.",
    tech: ["Java", "Spring Boot", "React.js", "Tailwind CSS"],
    github: "https://github.com/xsentoo/BlockChain"
  },
  {
    title: "Watermelone Game",
    slug: "watermelone",
    description: "Reproduction additive du Suika Game développé en JavaScript. Moteur de physique 2D, gestion des collisions élastiques et algorithme de fusion dynamique.",
    tech: ["JavaScript", "HTML5", "Game Design"],
    github: "https://github.com/xsentoo/WatermeloneGame"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Projets
            </h2>
            <p className="text-foreground/60 font-light max-w-2xl mx-auto">
              Cliquez au cœur de mes réalisations pour explorer l'architecture et les roadmaps techniques.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isInternal = !!project.slug;
            
            return (
              <FadeIn key={project.title} delay={idx * 0.15} className="group h-full">
                <Link href={isInternal ? `/project/${project.slug}` : project.github} target={isInternal ? "_self" : "_blank"} passHref legacyBehavior>
                  <motion.a 
                    className="block h-full cursor-pointer"
                    whileHover={{ y: -8, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col h-full bg-surface border border-border rounded-3xl p-8 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
                      
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex-1 relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center justify-between">
                          <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
                            {project.title}
                          </span>
                          <motion.div
                            whileHover={isInternal ? { x: 5 } : { rotate: 45 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            <ExternalLink className={`w-5 h-5 ${isInternal ? "text-foreground" : "text-foreground/40"} group-hover:text-foreground transition-colors`} />
                          </motion.div>
                        </h3>
                        <p className="text-foreground/60 mb-8 font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tech.map(tech => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium border border-border rounded-full text-foreground/70 bg-background/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
