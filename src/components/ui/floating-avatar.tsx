"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export function FloatingAvatar() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pathname = usePathname();

  const [emote, setEmote] = useState("👋");
  const [showEmote, setShowEmote] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const initialTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show a greeting after a small delay on initial load
    initialTimeoutRef.current = setTimeout(() => {
      showSpecificEmote("👋 Bienvenue sur mon portfolio !");
    }, 1500);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "extra", "contact"];
      let active = "";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if element is in the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            active = id;
          }
        }
      });
      if (active !== currentSection) {
        setCurrentSection(active);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
    };
  }, [mouseX, mouseY, currentSection]);

  // Map mouse position to avatar 3D rotation
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);

  // Map mouse to subtle positional shifts
  const translateX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  // Spring physics for smooth movement
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 25 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 25 });
  const smoothX = useSpring(translateX, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(translateY, { stiffness: 100, damping: 25 });
  const [emoteTimeoutId, setEmoteTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showSpecificEmote = (text: string) => {
    if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
    setEmote(text);
    setShowEmote(true);
    if (emoteTimeoutId) clearTimeout(emoteTimeoutId);
    setEmoteTimeoutId(setTimeout(() => setShowEmote(false), 3500));
  };

  const triggerEmote = (manual = false) => {
    let emotes = ["💻 Code. Eat. Sleep.", "🚀 Let's build!", "✨ Magie du code", "🔥 10x Dev", "☕ Coffee time"];
    
    // Context aware based on page
    if (pathname === "/project/hackzone") {
      emotes = ["🔒 Cybersécurité validée !", "Hacking éthique en cours...", "JWT & OWASP, c'est mon dada !"];
    } else if (pathname === "/project/wheelson66") {
      emotes = ["🗺️ Architecture Microservices !✨", "Road trip time 🚗", "Regardez ce beau Dashboard !"];
    } else if (pathname === "/project/blockchain-project") {
      emotes = ["💎 Bloc miné !", "Architecture P2P ⛓️", "Proof of Work..."];
    } else if (pathname === "/project/watermelone") {
      emotes = ["🍉 Trop fun à coder !", "Physique 2D en Python 🐍", "Merge le fruit !"];
    } else {
      // Context aware based on home sections
      if (currentSection === "extra") {
        emotes = ["😅 J'ai tellement galéré pendant la nuit de l'info !", "Le challenge 48H, c'était intense 🥵", "Et je parle 3 langues !"];
      } else if (currentSection === "skills") {
        emotes = ["Java & Spring, c'est la base !", "Je clean code toujours 🧹", "React & Tailwind = ❤️"];
      } else if (currentSection === "projects") {
        emotes = ["Cliquez sur un projet pour voir l'architecture !", "Je suis super fier de HackZone 🔐", "WheelsOn66, c'était énorme !"];
      } else if (currentSection === "experience") {
        emotes = ["J'adore apprendre sur le terrain.", "Toujours en soif d'apprendre !"];
      } else if (currentSection === "contact") {
        emotes = ["Un projet ? Écrivez-moi !", "Connectons-nous sur LinkedIn 🤝!", "On travaille ensemble ?"];
      }
    }

    showSpecificEmote(emotes[Math.floor(Math.random() * emotes.length)]);
  };

  // Auto-trigger when changing sections or pages
  useEffect(() => {
    if (!currentSection && pathname === "/") return;
    
    // Adding a 1 second delay so it doesn't spam while scrolling fast
    const timer = setTimeout(() => {
      triggerEmote();
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentSection, pathname]);

  // Listener for specific manual hover events (Hackathon, OPM, etc)
  useEffect(() => {
    const handleCustomEvent = (e: any) => {
      if (e.detail === "hackathon") {
        showSpecificEmote("😅 J'ai trop galéré pendant ce hackathon !");
      } else if (e.detail === "opm") {
        showSpecificEmote("ÔPM : C'était top pour l'optimisation UX !");
      }
    };
    window.addEventListener("avatar-emote", handleCustomEvent);
    return () => window.removeEventListener("avatar-emote", handleCustomEvent);
  }, [emoteTimeoutId]);

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
      style={{ perspective: 1000 }}
    >
      <div className="relative group cursor-pointer">
        {/* Emote Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: showEmote ? 1 : 0, scale: showEmote ? 1 : 0.8, y: showEmote ? 0 : 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute -top-16 right-0 bg-white text-neutral-900 px-5 py-2.5 rounded-full shadow-2xl border border-neutral-200 text-sm font-bold whitespace-nowrap pointer-events-none"
        >
          {emote}
        </motion.div>

        {/* 3D Avatar Container */}
        <motion.div
          onClick={() => triggerEmote(true)}
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            x: smoothX,
            y: smoothY,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[4px] border-surface/80 bg-black relative"
        >
          <motion.img 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            src="/avatar_memoji.png" 
            alt="Interactive Avatar" 
            className="w-full h-full object-cover scale-[1.20] translate-y-1 select-none pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
}
