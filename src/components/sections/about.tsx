"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Créatif. Logique. Passionné.
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="space-y-8 text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            <p>
              Je suis Senthooran Thayaparan, Développeur Full Stack actuellement spécialisé dans les environnements Java, SpringBoot et React. Depuis toujours fasciné par les nouvelles technologies, j'allie mon pragmatisme backend avec le dynamisme d'interfaces frontend modernes.
            </p>
            <p>
              J'apprends encore et toujours, et je continuerai d'apprendre au quotidien. Actuellement en Master Sciences et Technologies du Métavers à l'INSA, je suis motivé à apporter des solutions robustes — en architectures microservices, sécurité web, ou optimisation UX — au sein d'une équipe ambitieuse.  
            </p>
            <p className="font-medium text-foreground/90">
              Ayant une forte autonomie tout en appréciant le travail d'équipe, je suis actuellement à la recherche d'une alternance pour Septembre 2026.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
