"use client";

import { Navbar } from "@/components/layout/navbar";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Monitor, 
  Code2, 
  Rocket, 
  Globe, 
  Sparkles, 
  TerminalSquare, 
  Layers
} from "lucide-react";

const timeline = [
  {
    title: "Le déclic initial",
    subtitle: "La curiosité comme moteur",
    icon: <TerminalSquare className="w-4 h-4 text-foreground/80" />,
    content: "J’ai commencé mon parcours dans l’informatique après le brevet. À ce moment-là, j’étais simplement curieux de comprendre comment fonctionnent les ordinateurs et les systèmes que nous utilisons au quotidien. Cette curiosité m’a progressivement guidé vers un parcours plus structuré et technique.",
    skills: []
  },
  {
    title: "Le Bac Pro SN",
    subtitle: "Les fondations de l'infrastructure",
    icon: <Monitor className="w-4 h-4 text-foreground/80" />,
    content: "L'orientation vers un Bac Pro Systèmes Numériques m'a permis de comprendre comment les systèmes informatiques fonctionnent concrètement sous le capot. C'était la première étape essentielle pour maîtriser la base.",
    skills: ["Réseaux Informatiques", "Adresses IP", "Windows Server", "Administration Système"]
  },
  {
    title: "BTS SIO",
    subtitle: "La révélation du code",
    icon: <Code2 className="w-4 h-4 text-foreground/80" />,
    content: "C’est à ce moment-là que j’ai réellement découvert le développement informatique. J’ai compris que l’informatique ne se limitait pas seulement aux réseaux, mais qu’elle ouvrait une porte immense vers la création de solutions complètes.",
    skills: ["Programmation Logicielle", "Conception Web", "Java", "Logique Algorithmique"]
  },
  {
    title: "Bachelor",
    subtitle: "Montée en compétences & Hackathons",
    icon: <Rocket className="w-4 h-4 text-foreground/80" />,
    content: "En Bachelor, les projets se sont étoffés. J'ai aussi eu l'opportunité de participer à mes premiers hackathons de 48 heures, notamment les Nuits de l'Info, découvrant l'importance cruciale de la gestion du temps et de la collaboration d'équipe.",
    skills: ["React", "APIs REST", "Projets Complexes", "Travail d'équipe"]
  },
  {
    title: "Master à l'INSA Hauts-de-France",
    subtitle: "Ouverture vers le Métavers et l'innovation",
    icon: <Globe className="w-4 h-4 text-foreground/80" />,
    content: "Actuellement en Master Sciences et Technologies du Métavers. J'explore la convergence entre le développement logiciel classique et les expériences virtuelles de pointe. J'apprends comment ces technologies émergentes vont façonner notre futur.",
    skills: ["Unity & C#", "Modélisation 3D (Maya)", "Cloud Computing (AWS)", "Blockchain"]
  },
  {
    title: "Ma vision aujourd'hui",
    subtitle: "L'apprentissage continu face à l'IA",
    icon: <Sparkles className="w-4 h-4 text-foreground/80" />,
    content: (
      <>
        <p>
          L’intelligence artificielle est aujourd’hui au centre des évolutions technologiques. Elle transforme rapidement la manière dont les logiciels sont conçus, développés et utilisés dans tous les secteurs. Dans ce contexte, il est essentiel de ne pas voir l’IA comme une menace, mais comme une évolution du métier de développeur.
        </p>
        
        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Une transformation du métier de développeur</h3>
        <p>
          L’IA change profondément le rôle des développeurs. Elle permet aujourd’hui d’automatiser certaines tâches, d’accélérer le développement et de générer du code plus rapidement. Cela ne signifie pas la disparition du métier, mais plutôt une évolution :
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4 mt-2">
          <li>moins de tâches répétitives</li>
          <li>plus de focus sur la conception et la logique</li>
          <li>plus d’importance donnée à la compréhension globale des systèmes</li>
        </ul>
        <p>Le développeur ne se limite plus à écrire du code, mais devient un concepteur de solutions.</p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Une nouvelle manière de travailler</h3>
        <p>
          Avec l’arrivée de ces outils, la valeur d’un développeur ne dépend plus uniquement de sa capacité à coder une syntaxe, mais de sa capacité à :
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4 mt-2">
          <li>comprendre un besoin réel</li>
          <li>structurer une solution</li>
          <li>utiliser les bons outils (y compris l’IA)</li>
          <li>livrer un résultat fonctionnel et efficace</li>
        </ul>
        <p>L’IA devient donc un outil d’assistance, au même titre qu’un framework ou une bibliothèque.</p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Mon adaptation à l’IA</h3>
        <p>Face à cette évolution, j’ai choisi de m’adapter plutôt que de la subir. Dans mon apprentissage, je :</p>
        <ul className="list-disc pl-6 space-y-1 mb-4 mt-2">
          <li>continue à renforcer mes bases en programmation (Java, C#, etc.)</li>
          <li>utilise les outils d’IA pour améliorer ma productivité</li>
          <li>cherche à comprendre comment fonctionnent ces technologies</li>
          <li>développe des projets concrets en intégrant ces outils</li>
        </ul>
        <p>Mon objectif est de ne pas simplement “savoir coder”, mais de savoir construire des solutions complètes en utilisant les technologies modernes.</p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Conclusion</h3>
        <p>
          L’intelligence artificielle ne remplace pas les développeurs, elle change leurs méthodes de travail. Ceux qui sauront s’adapter, apprendre rapidement et utiliser ces outils efficacement auront un avantage important dans le futur.
        </p>
        <p className="mt-4 font-medium text-foreground/90">
          Pour ma part, je considère l’IA comme une opportunité d’évolution, et non comme une limite, et je construis mon parcours dans cette direction.
        </p>
      </>
    ),
    skills: []
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-foreground selection:text-background pb-32">
      <Navbar hideLinks={true} />
      
      {/* Hero Header for Blog */}
      <section className="relative pt-12 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-transparent z-0" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <div className="mb-12 flex justify-start text-left">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-foreground transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour à l'accueil
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Histoire & Vision
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
              D'une simple curiosité à la passion du développement professionnel : voici l'évolution de mon parcours dans les technologies modernes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="relative border-l border-border md:ml-6 ml-4 space-y-16 pb-12">
          
          {timeline.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.15} className="relative pl-8 md:pl-12">
              {/* Glowing Node on Timeline */}
              <div className="absolute left-[-20px] top-4 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              <div className="group relative bg-surface border border-border rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-widest font-medium text-foreground/50">
                      {item.subtitle}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-foreground transition-colors">
                    {item.title}
                  </h2>
                  <div className="text-foreground/70 leading-relaxed font-light text-lg mb-6 space-y-4">
                    {item.content}
                  </div>
                  
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {item.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1.5 text-xs font-medium border border-border/70 rounded-full text-foreground/70 bg-background/50 hover:border-foreground/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}

        </div>
      </section>

      {/* Final Call To Action */}
      <section className="container mx-auto px-6 max-w-4xl text-center mt-20">
        <FadeIn delay={0.3}>
          <div className="p-12 bg-surface border border-border rounded-[3rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <Layers className="w-10 h-10 mx-auto text-foreground/40 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 border-b border-border/0">
              Prêt à concevoir l'avenir ensemble ?
            </h2>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Mon parcours est guidé par l'envie constante d'apprendre. Si ma vision correspond aux enjeux technologiques de votre entreprise pour une alternance, discutons-en.
            </p>
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=senthooran.thayaparan.pro@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 bg-foreground text-background font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Me Contacter
            </motion.a>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
