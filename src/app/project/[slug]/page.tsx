"use client";

import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Hourglass } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  const renderStatus = (status: string) => {
    switch (status) {
      case "done":
        return <span className="flex items-center text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-medium"><CheckCircle2 className="w-4 h-4 mr-2"/> Fait</span>;
      case "in_progress":
        return <span className="flex items-center text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full text-xs font-medium"><Clock className="w-4 h-4 mr-2"/> En cours</span>;
      case "pending":
      default:
        return <span className="flex items-center text-foreground/40 bg-foreground/5 px-3 py-1 rounded-full text-xs font-medium"><Hourglass className="w-4 h-4 mr-2"/> En attente</span>;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar hideLinks={true} />
      
      {/* HEADER HERO */}
      <section className="pt-12 pb-10 px-6 container mx-auto max-w-6xl">
        <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Retour au portfolio
        </Link>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{project.title}</h1>
              <p className="text-2xl text-foreground/70 font-light mb-8 leading-tight">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 border border-border rounded-full text-xs font-medium text-foreground/80 bg-surface">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-4 text-foreground/60 leading-relaxed font-light mb-8">
                <p><strong>Cible:</strong> {project.targetAudience}</p>
                <p><strong>Plateforme:</strong> {project.platform}</p>
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-foreground text-background font-medium rounded-full shadow-lg hover:scale-105 transition-transform">
                  Voir sur GitHub
                </a>
              )}
            </FadeIn>
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Dashboard Mockup - Back */}
            <motion.img 
              initial={{ y: 50, opacity: 0, rotate: -5 }}
              animate={{ y: 0, opacity: 1, rotate: -5 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -20, rotate: 0, zIndex: 10 }}
              src={project.images.dashboard} 
              alt={`${project.title} Dashboard`}
              className="absolute w-[280px] shadow-2xl rounded-[3rem] right-0 top-10 border-[6px] border-surface" 
            />
            {/* Map Mockup - Front */}
            <motion.img 
              initial={{ y: 100, opacity: 0, rotate: 5 }}
              animate={{ y: 20, opacity: 1, rotate: 5 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -10, rotate: 0, zIndex: 10 }}
              src={project.images.map} 
              alt={`${project.title} Map`}
              className="absolute w-[280px] shadow-2xl rounded-[3rem] left-0 bottom-0 border-[6px] border-surface z-10" 
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW & FEATURES */}
      <section className="py-32 bg-surface/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Présentation du Projet</h2>
            <p className="text-xl text-foreground/70 font-light leading-relaxed mb-20">{project.overview}</p>
          </FadeIn>

          <h3 className="text-2xl font-bold tracking-tight mb-10">Périmètre Fonctionnel</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-background border border-border rounded-3xl h-full shadow-sm hover:shadow-xl transition-shadow cursor-default">
                  <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE & MICROSERVICES */}
      <section className="py-32 bg-background border-t border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Architecture Logicielle</h2>
            <p className="text-lg text-foreground/60 font-light mb-16">Découpage logique des microservices gérant l'intégration, la sécurité et les traitements en temps réel.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {project.microservices.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="flex flex-col p-8 border border-border/50 bg-surface/50 rounded-3xl h-full">
                  <div className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-2">{service.role}</div>
                  <h4 className="text-xl font-bold mb-4">{service.name}</h4>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed mt-auto">{service.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TÂCHES & ROADMAP */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Progression & Roadmap</h2>
          </FadeIn>

          <div className="space-y-4">
            {project.tasks.map((task, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} direction="up">
                <motion.div 
                  whileHover={{ x: 10, backgroundColor: "var(--background)" }} 
                  className="flex items-center justify-between p-6 border border-border/50 rounded-2xl bg-background/50 transition-colors"
                >
                  <span className={`text-lg font-medium ${task.status === "pending" ? "text-foreground/50" : "text-foreground"}`}>
                    {task.title}
                  </span>
                  <div>{renderStatus(task.status)}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
