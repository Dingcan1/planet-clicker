import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play Planet Clicker - a free addictive incremental game right in your browser. Click planets, generate energy, and expand your cosmic empire. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Telegram", href: "https://t.me/s/free_unblocked_games" },
        { text: "CAL", href: "https://cal.com/vincent-ai" },
        { text: "Patreon", href: "https://www.patreon.com/posts/play-free-crazy-130738673" },
        { text: "Linktr", href: "https://linktr.ee/vincent20250520" },
        { text: "Creem", href: "https://www.creem.io/bip/vincent-ai" },
        { text: "GetAllMyLinks", href: "https://getallmylinks.com/vincent" },

      ]
    },
    games: {  // 添加 games section
      title: "Games",
      links: [
        { text: "Planet Clicker", href: "/" },
        { text: "Crazy Cow 3D", href: "/crazy-cow-3d" },
        { text: "Crazy Chicken 3D", href: "/crazy-chicken-3d" },
        { text: "Cheese Chompers 3D", href: "/cheese-chompers-3d" },
        { text: "Italian Brainrot Clicker", href: "/brainrot-clicker" },
        { text: "Basketball Bros Unblocked", href: "/basketball-bros-unblocked" },

        { text: "Sprunki Incredibox", href: "/sprunki-incredibox" },
        { text: "Futbol Libre", href: "/futbol-libre" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Planet Clicker. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Planet Clicker",
    votes: "votes",
    initialRating: 4.9,
    initialVotes: 210
  },
  gameSection: {
    title: "Planet Clicker",
    game: {
      url: '/planet-clicker.embed',
      title: "planet-clicker",
      externalUrl: '/game/planet-clicker/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: "How to Play Planet Clicker Online Free - Game Controls & Guide",
    description: "Playing Planet Clicker online is simple and addictive. Just use your mouse to click on planets and generate energy. Each click earns you energy points that can be used to purchase upgrades and unlock new planets. The more you click, the more energy you generate, allowing you to expand your cosmic empire.\n\n" +
      "Success in Planet Clicker depends on strategic resource management and efficient upgrading. Start by focusing on basic upgrades that increase your click value and generate passive income. As you accumulate more energy, invest in automated production facilities like farms, power plants, and advanced technologies that will continue to generate energy even when you're not actively clicking.\n\n" +
      "To maximize your progress in Planet Clicker, remember to regularly check for new upgrade opportunities. Unlock additional planets like Mars and Venus to access unique resources and technologies. Even when you're not actively playing, your energy production continues in the background, making this free online clicker game perfect for both short gaming sessions and long-term strategic planning.",
    image: "/assets/img/planet-clicker.jpg",
    imageAlt: "Planet Clicker Game Guide - Play Online Free, Controls, Strategy, and Upgrade Tutorial"
  },
  whatIs: {
    title: "Everything about Planet Clicker - Play Game Online Free",
    description: "Planet Clicker is an addictive free online incremental game where players produce clicks or energy to generate resources on different planets. You can play this game directly in your browser anytime. Unlike traditional clicker games, Planet Clicker offers a cosmic experience with multiple planets to discover and upgrade.\n\n" +
      "Expand your cosmic empire across multiple planets in this engaging online game. Start with Earth, then unlock Mars and Venus as you progress. Each planet offers unique resources and technologies, creating a rich and rewarding gameplay experience that keeps you coming back for more.\n\n" +
      "Planet Clicker is designed to be accessible for newcomers while offering depth for experienced players. The game's idle mechanics mean your resources continue to accumulate even when you're not actively playing. Play this free online game directly in your browser - no downloads needed, just pure addictive clicking fun that keeps you engaged for hours.",
    logo: {
      src: "/assets/img/android-chrome-192x192.jpg",
      alt: "Planet Clicker - Free Online Browser Game Logo"
    }
  },
  faq: {
    title: "Frequently Asked Questions - Planet Clicker Online Game",
    items: [
      {
        value: "where-to-play-original",
        question: "Where can I find and play Planet Clicker online?",
        answer: "You can play Planet Clicker directly on our website. As a browser-based game, it's accessible on any device with a modern web browser. No downloads or installations are required - simply visit our site and start clicking to build your cosmic empire. The game is optimized for both desktop and mobile play."
      },
      {
        value: "play-on-mobile",
        question: "Can I play Planet Clicker on my mobile device?",
        answer: "Yes, Planet Clicker is fully optimized for mobile play. The game works on smartphones and tablets with modern web browsers. The touch interface makes clicking even more intuitive - simply tap on planets to generate energy and expand your cosmic empire. Your progress is saved across devices, allowing you to continue your game anywhere."
      },
      {
        value: "save-progress",
        question: "Does Planet Clicker save my progress automatically?",
        answer: "Yes, Planet Clicker automatically saves your progress in your browser's local storage. This means you can close the game and return later to find your energy production has continued in your absence. For the best experience, we recommend using the same browser and device, or creating an account if you want to play across multiple devices."
      },
      {
        value: "game-mechanics",
        question: "How does the progression system work in Planet Clicker?",
        answer: "Planet Clicker features a multi-tiered progression system centered around energy production and planet colonization. You start with Earth, generating energy through clicks and basic upgrades. As you accumulate energy, you can unlock Mars, Venus, and other planets, each with unique resources and technologies. The game balances active clicking with idle production, allowing for different play styles."
      },
      {
        value: "beginner-tips",
        question: "What tips would you give to new Planet Clicker players?",
        answer: "For new Planet Clicker players, we recommend focusing first on upgrades that increase your click value. Once you have a decent click value, invest in automated production facilities that generate energy passively. Keep your tab open even when not actively playing to accumulate resources. Regularly check for new upgrade opportunities, and plan strategically for unlocking new planets, which offer exponential growth potential."
      },
      {
        value: "technical-requirements",
        question: "What are the technical requirements to play Planet Clicker smoothly?",
        answer: "Planet Clicker is designed to run smoothly on most devices. We recommend using a modern browser like Chrome, Firefox, or Edge, and a stable internet connection for the initial load. The game is optimized to work well even on older computers and mobile devices. If you experience any performance issues, try closing other browser tabs or refreshing the page."
      },
      {
        value: "offline-play",
        question: "Can I play Planet Clicker offline?",
        answer: "While Planet Clicker requires an internet connection for the initial load, the game can continue running even if your connection drops temporarily. The game calculates offline progress when you return, rewarding you with the energy you would have earned while away. For the best experience and to ensure your progress is saved, we recommend playing with a stable internet connection when possible."
      },
      {
        value: "advanced-strategies",
        question: "What are some advanced strategies for Planet Clicker?",
        answer: "Advanced Planet Clicker players should focus on optimizing their upgrade path to maximize energy production. Calculate the energy-per-second (EPS) return on each upgrade to make efficient choices. When unlocking new planets, immediately invest in their unique technologies for exponential growth. Balance your resources between immediate gains and long-term investments. Consider using auto-clickers for extended sessions, and remember to check the game regularly to reinvest your accumulated energy."
      }
    ]
  },
  features: {
    title: "Revolutionary Features of Planet Clicker - Play Free Online Game",
    items: [
      {
        title: "Multi-Planet Exploration",
        description: "Planet Clicker offers an expansive cosmic experience with multiple planets to discover and colonize. Begin your journey on Earth, then unlock Mars and Venus as you progress. Each planet has its own unique resources, upgrades, and technologies to discover. The multi-planet system creates a sense of progression and achievement as you expand your cosmic empire across the solar system."
      },
      {
        title: "Strategic Upgrade System",
        description: "Dive into Planet Clicker's deep and rewarding upgrade system that offers meaningful choices at every stage of the game. Invest in click multipliers for active play, or focus on automated production for idle gameplay. Unlock special technologies unique to each planet that dramatically change your energy production capabilities. The carefully balanced upgrade tree ensures that every decision matters in your quest for cosmic dominance."
      },
      {
        title: "Idle Progression Mechanics",
        description: "Planet Clicker perfectly balances active clicking with idle progression, making it ideal for all types of players. Build your production infrastructure and watch as energy accumulates even when you're not actively playing. Return to find your cosmic empire has grown while you were away. The idle mechanics respect your time while still rewarding active play, creating a satisfying gameplay loop that keeps you coming back."
      },
      {
        title: "Accessible Yet Deep Gameplay",
        description: "Experience Planet Clicker's perfectly tuned difficulty curve that makes the game accessible to newcomers while offering depth for veterans. Start with simple clicking and basic upgrades, then gradually discover advanced strategies and optimization techniques. The intuitive interface makes core mechanics easy to understand, while the layered systems provide endless opportunities for mastery and efficiency in this free to play online game."
      }
    ]
  }
} as const;


