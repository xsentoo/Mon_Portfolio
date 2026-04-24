export interface Task {
  title: string;
  status: "done" | "in_progress" | "pending";
}

export interface Feature {
  title: string;
  description: string;
}

export interface Microservice {
  name: string;
  role: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  platform: string;
  targetAudience: string;
  techStack: string[];
  features: Feature[];
  microservices: Microservice[];
  tasks: Task[];
  images: {
    dashboard: string;
    map: string;
  };
  github?: string;
  live?: string;
}

export const projectsData: Record<string, ProjectDetail> = {
  "wheelson66": {
    slug: "wheelson66",
    title: "WheelsOn66",
    subtitle: "Planifiez, visualisez et partagez vos road trips idéals.",
    overview: "WheelsOn66 est une application mobile ambitieuse dédiée aux passionnés de voyages et de road trips (type Route 66, road trips au Japon, etc.). Elle intègre la cartographie Google Maps, un moteur de réservation hôtelière et une messagerie instantanée de groupe, le tout propulsé par une architecture backend moderne en microservices.",
    platform: "Application mobile (iOS et Android)",
    targetAudience: "Voyageurs, groupes d'amis, ou familles organisant des circuits touristiques.",
    techStack: [
      "React Native", "TypeScript", "TanStack Query", "Java 21", "Spring Boot", 
      "Spring Cloud", "Kafka", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Docker"
    ],
    features: [
      {
        title: "Tableau de Bord & Découverte",
        description: "Découverte de destinations populaires et gestion de l'historique des voyages passés et en cours via une interface moderne."
      },
      {
        title: "Moteur de Planification",
        description: "Formulaire paramétrable permettant de configurer les dates, les passagers et d'ajouter de multiples étapes spécifiques sur un même trajet."
      },
      {
        title: "Intégration Hôtelière",
        description: "Recherche en temps réel d'hôtels basée sur la géolocalisation des arrêts via une API externe, avec mise en cache ultra-rapide sous Redis."
      },
      {
        title: "Cartographie Interactive",
        description: "Visualisation complète du trajet (distances, temps estimé) sur Google Maps grâce aux marqueurs intelligents."
      },
      {
        title: "Social & Mode Temps Réel",
        description: "Messagerie instantanée pour chaque groupe de voyage et synchronisation en direct du planning entre amis via WebSockets."
      }
    ],
    microservices: [
      {
        name: "Discovery Server (Eureka)",
        role: "Annuaire Dynamique",
        description: "Le cœur de l'infrastructure Cloud. Il répertorie en temps réel les ports et adresses IP des autres microservices actifs."
      },
      {
        name: "API Gateway",
        role: "Le Vigile",
        description: "Le seul point d'entrée public de l'application. Elle route les requêtes mobiles vers les bons services internes tout en appliquant le Load Balancing."
      },
      {
        name: "User Service",
        role: "Identités & Sécurité",
        description: "Gestion des utilisateurs (PostgreSQL) et émission des tokens d'authentification sécurisés (JWT)."
      },
      {
        name: "Trip Service",
        role: "Cœur Métier",
        description: "Microservice gérant la création des voyages, l'ajout des étapes, interrogeant la Gateway pour obtenir l'ID Auth sécurisé."
      },
      {
        name: "Spring Batch",
        role: "Nettoyage asynchrone",
        description: "Job programmé qui archive et supprime la pollution des brouillons inactifs de plus de 6 mois dans la base de données."
      }
    ],
    tasks: [
      { title: "Génération de l'infrastructure Cloud: Service Discovery (Eureka Server)", status: "done" },
      { title: "Configuration et routage de l'API Gateway", status: "done" },
      { title: "Architecture globale (Découpage PostgreSQL, Redis, MongoDB)", status: "done" },
      { title: "User Service & Logique Sécurité (JWT / Inscription)", status: "in_progress" },
      { title: "Trip Service: API REST pour création et listage de voyages", status: "pending" },
      { title: "Intégration d'exploration Frontend Mobile (React Native)", status: "pending" },
      { title: "Chat Service (WebSockets) et historique MongoDB", status: "pending" },
      { title: "Notification Service & Event-Driven Kafka", status: "pending" },
      { title: "Job de nettoyage automatisé (Spring Batch)", status: "pending" }
    ],
    images: {
      dashboard: "/projects/wheelson66_dashboard.png",
      map: "/projects/wheelson66_map.png"
    },
    github: "https://github.com/xsentoo/WheelsOn66Front"
  },
  "hackzone": {
    slug: "hackzone",
    title: "HackZone",
    subtitle: "La plateforme e-learning de cybersécurité 'Learning by Doing'.",
    overview: "HackZone transforme l'enseignement théorique de la cybersécurité en proposant un environnement Sandbox où les erreurs n'ont pas de conséquences. Pensée comme un 'Capture The Flag' (CTF), la plateforme embarque des systèmes de gamification avancés (Badges, Leaderboard dynamique) et une protection anti-triche stricte, propulsé par une conception Java Stateless sécurisée (OWASP).",
    platform: "Application Web et APIs Hautes Performances",
    targetAudience: "Étudiants en cybersécurité cherchant une montée en compétence pratique via simulations.",
    techStack: [
      "Java 21", "Spring Boot 3", "Spring Security 6", "JWT", "BCrypt", "MySQL", "React"
    ],
    features: [
      {
        title: "Simulation d'Attaques (Sandbox)",
        description: "Environnements vulnérables générés à la volée simulant des failles réelles comme l'injection SQL (UNION-Based) ou le XSS."
      },
      {
        title: "Mode Compétition (Gamification)",
        description: "Calcul intelligent des points basé sur la difficulté et le temps passé. Déblocage de badges 'SQL Rookie' ou 'OSINT Detective'."
      },
      {
        title: "Classement Temps Réel (Leaderboard)",
        description: "Le classement n'est plus stocké 'en dur' mais généré instantanément grâce à une dénormalisation des scores dans la base et un index SQL."
      },
      {
        title: "Contre-Mesures & Anti-Triche",
        description: "Protection complète côté serveur: Unique Keys (userId, attId), HttpOnly Cookies contre le JavaScript malveillant, et blocage formel du farming de points."
      }
    ],
    microservices: [
      {
        name: "AuthController",
        role: "Le Guichet d'Accueil",
        description: "Seul point d'entrée public vérifiant l'identité stricte en utilisant un hash irréversible via BCrypt."
      },
      {
        name: "JwtUtil",
        role: "La Machine à Bracelets",
        description: "Génère un jeton JWT inviolable signé cryptographiquement garantissant l'identité Stateless de l'utilisateur."
      },
      {
        name: "JwtFilter",
        role: "Le Videur",
        description: "Filtre placé devant chaque accès aux challenges. Rejette instantanément toute requête sans cookie HttpOnly valide."
      },
      {
        name: "Moteur de Validation",
        role: "Le Juge Indépendant",
        description: "Vérifie les 'Flags' de hacking de manière dynamique sans altérer le code source, via la table 'Solves'."
      }
    ],
    tasks: [
      { title: "Conception du modèle MCD (Refonte Dénormalisée)", status: "done" },
      { title: "Configuration Spring Security 6 et Architecture Stateless", status: "done" },
      { title: "Implémentation de l'authentification HttpOnly JWT", status: "done" },
      { title: "Moteur de points Gamifié adaptatif et Badges", status: "done" },
      { title: "Bibliothèque de vulnérabilités Web (Injection SQL, XSS, OSINT)", status: "done" },
      { title: "Système Anti-Triche SQL (UNIQUE KEY & Cascade)", status: "done" },
      { title: "Design 'Dark Mode' Cybersécurité et UI fluide", status: "done" }
    ],
    images: {
      dashboard: "/projects/hackzone_dashboard.png",
      map: "/projects/hackzone_mission.png"
    },
    github: "https://github.com/xsentoo/HackZone-Global"
  },
  "blockchain-project": {
    slug: "blockchain-project",
    title: "Blockchain Project",
    subtitle: "Simulateur complet d'un réseau P2P et du minage Proof Of Work.",
    overview: "Un projet éducatif ambitieux visant à démystifier le fonctionnement d'une véritable Blockchain. En concevant le réseau depuis zéro, cette application met en lumière les principes fondamentaux du Web3 : hachage cryptographique, consensus distribué, minage de blocs (Proof of Work), et validation immuable des transactions peer-to-peer.",
    platform: "Application Web et simulateur réseau",
    targetAudience: "Développeurs et passionnés de finance décentralisée (DeFi).",
    techStack: [
      "Java", "Spring Boot", "WebSockets", "SHA-256", "React.js", "Tailwind CSS"
    ],
    features: [
      {
        title: "Explorateur de Blocs",
        description: "Interface esthétique listant tous les blocs de la chaîne avec leurs métadonnées (Nonce, Hash Précédent, Merkle Root)."
      },
      {
        title: "Simulation Proof of Work",
        description: "Ajustement dynamique de la difficulté de minage. Les nœuds calculent intensivement des hashs respectant une règle précise pour valider les blocs."
      },
      {
        title: "Transactions Peer-to-Peer",
        description: "Outil de création de portefeuilles (Wallets) virtuels permettant l'échange transparent de tokens entre les membres du réseau."
      },
      {
        title: "Consensus par chaîne la plus longue",
        description: "Résolution algorithmique des conflits (Forks) garantissant que 51% du réseau reste synchronisé sur le registre immuable."
      }
    ],
    microservices: [
      {
        name: "Node Manager",
        role: "Coordinateur P2P",
        description: "Pointe et connecte les serveurs isolés entre eux via WebSockets pour diffuser (gossip) les nouveaux blocs."
      },
      {
        name: "Mining Engine",
        role: "Calcul Intensif",
        description: "Boucle de recherche asynchrone du Nonce magique permettant de valider et d'insérer un bloc dans le grand livre."
      },
      {
        name: "Crypto Engine",
        role: "Intégrité SHA-256",
        description: "Enforce le hachage inviolable complet pour valider cryptographiquement la corrélation passée des blocs."
      }
    ],
    tasks: [
      { title: "Structure de données Block et vérification cryptographique (SHA-256)", status: "done" },
      { title: "Algorithme Proof of Work et gestion de la difficulté", status: "done" },
      { title: "Moteur de communication réseau (WebSockets P2P)", status: "done" },
      { title: "Système de Portefeuille (Wallet) et création des clés", status: "done" },
      { title: "Pool de transactions non-confirmées (Mempool)", status: "done" },
      { title: "Interface Dashboard Block Explorer avec React / Tailwind CSS", status: "done" }
    ],
    images: {
      dashboard: "/projects/blockchain_dashboard.png",
      map: "/projects/blockchain_p2p.png"
    },
    github: "https://github.com/xsentoo/BlockChain"
  },
  "watermelone": {
    slug: "watermelone",
    title: "Watermelone Game",
    subtitle: "Une recréation addictive et colorée du Suika Game.",
    overview: "Fruit d'une prouesse technique en manipulation spatiale et collision, ce projet JavaScript recrée la mécanique virale où des fruits chutent et fusionnent pour évoluer. Le tout repose sur un moteur physique 2D assurant une gravité réaliste, de l'élasticité et des comportements aléatoires provoquant des parties toujours surprenantes et colorées.",
    platform: "Application Web / JavaScript",
    targetAudience: "Joueurs occasionnels et amateurs de casse-têtes.",
    techStack: [
      "JavaScript", "Game Design", "HTML5 / Canvas", "Moteur Physique 2D", "UI/UX Interactive"
    ],
    features: [
      {
        title: "Moteur Physique Temps Réel",
        description: "Calcul en continu (60 FPS) des rebonds, de l'inertie et des frictions entre des corps ovales et circulaires."
      },
      {
        title: "Mécanique d'Évolution (Merge)",
        description: "Lorsque deux fruits identiques se touchent, l'algorithme les absorbe, calcule le centre de masse moyen et 'spawn' l'évolution supérieure."
      },
      {
        title: "Système de 'Next Queue'",
        description: "Prévisualisation du prochain objet avec distribution des probabilités pondérée rendant le gameplay stratégique."
      },
      {
        title: "Feedback Visuel et Juteux",
        description: "Utilisation d'effets de particules ('Juiciness'), secousses d'écran discrètes (Screen Shake) et de scores animés à la fusion."
      }
    ],
    microservices: [
      {
        name: "Physics Engine",
        role: "Calculateur",
        description: "Détecte les collisions par force en appliquant des contraintes géométriques pour éviter la duplication."
      },
      {
        name: "Game Loop",
        role: "Orchestrateur FPS",
        description: "Une boucle continue (while True) qui dessine, met à jour la logique, et synchronise l'horloge interne (delta time)."
      },
      {
        name: "Event Manager",
        role: "Contrôles",
        description: "Capte la gestion au millimètre de la souris et l'animation du lâcher de fruit asynchrone."
      }
    ],
    tasks: [
      { title: "Configuration fenêtrée initiale et Game Loop intégrée", status: "done" },
      { title: "Implémentation d'un espace de Box2D avec limites invisibles", status: "done" },
      { title: "Système de génération des cercles (Poids, Friction, Rebondis)", status: "done" },
      { title: "Logique de Fusion ('Merge') sans déstabilisation physique", status: "done" },
      { title: "Design Artistique (Fruits, Écran Titre Premium, Fonts adaptées)", status: "done" },
      { title: "Enregistrement local et affichage du High-Score absolu", status: "done" }
    ],
    images: {
      dashboard: "/projects/watermelone_game.png",
      map: "/projects/watermelone_menu.png"
    },
    github: "https://github.com/xsentoo/WatermeloneGame"
  }
};
