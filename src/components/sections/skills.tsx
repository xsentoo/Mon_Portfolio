"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const skills = [
  { category: "Langage & Framework", technologies: ["Java", "SpringBoot", "C#", "React", "Python", "C", "HTML5", "CSS3"] },
  { category: "Bases de données", technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { category: "Outils & DevOps", technologies: ["Docker", "Git", "Maya", "Figma", "Unity", "Blockchain", "AWS", "Kafka"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">
              Compétences Techniques
            </h2>
            <p className="text-black/60 font-light max-w-2xl mx-auto">
              Un panorama compact et équilibré de mon stack technique.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {skills.map((skillGroup, idx) => (
            <FadeIn key={skillGroup.category} delay={idx * 0.15} direction="up">
              <div className="flex flex-col md:flex-row md:items-center border-t border-black/10 pt-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <h3 className="text-xl font-medium text-black/90">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="md:w-2/3 flex flex-wrap gap-3">
                  {skillGroup.technologies.map((tech) => (
                    <motion.span 
                      key={tech} 
                      whileHover={{ scale: 1.1, y: -2, backgroundColor: "#171717", color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="px-4 py-2 border border-neutral-300 rounded-full text-sm font-medium text-neutral-900 bg-neutral-100 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
