export const featuredProjects = [
  {
  title: "Travello - Travel Itinerary App",
  year: "2025",
  description: "Designed a high-fidelity travel itinerary app focusing on user-friendly onboarding and a structured dashboard with visual activity breakdowns, real-time navigation integration, and embedded travel recommendations.",
  tech: ["Figma", "UI/UX Design", "Prototyping"],
  type: "UI Design",
  category: "Mobile App Design",
  color: "from-blue-500 to-indigo-600",
  
  //behanceLink: "https://www.behance.net/your-username/travello", // UPDATE THIS
  
  caseStudy: {
    problem: "Modern travelers planning multi-destination trips struggle with scattered information across multiple apps and platforms. They often resort to using spreadsheets, notes apps, and screenshots to organize itineraries, leading to stress and overlooked details during travel. This design exploration focuses on creating an intuitive interface that consolidates trip planning into a single, visually appealing experience with clear input fields, activity organization, and easy navigation access.",
    
    stats: [
      { value: "5.4", label: "Average apps used per trip (Phocuswright)", color: "text-blue-400" },
      { value: "Visual", label: "Image-first design for better engagement", color: "text-purple-400" },
      { value: "Mobile", label: "Optimized for on-the-go travel planning", color: "text-teal-400" }
    ],
    
    solution: "Travello addresses these challenges through clean, intuitive design focused on two core experiences: streamlined onboarding and organized activity viewing. The onboarding screen uses progressive disclosure with three simple inputs (destination, duration, travelers) and engaging visual elements to reduce entry friction. The trip dashboard provides at-a-glance access to daily itineraries with visual activity cards featuring embedded images, time details, distance information, and direct navigation links—creating an aesthetically pleasing yet functional interface that consolidates essential travel information.",
    
    features: [
      {
        title: "Progressive Onboarding",
        description: "Clean 3-field input (destination, dates, travelers) with visual hierarchy",
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400"
      },
      {
        title: "Visual Activity Cards",
        description: "Image-rich cards with time, location, and quick navigation access",
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400"
      },
      {
        title: "Interactive Date Navigation",
        description: "Horizontal date scroller for easy day-to-day switching",
        bgColor: "bg-amber-500/20",
        iconColor: "text-amber-400"
      },
      {
        title: "Integrated Navigation",
        description: "Direct map links and directions embedded in activity cards",
        bgColor: "bg-teal-500/20",
        iconColor: "text-teal-400"
      }
    ],
    
    process: [
      "Analyzed existing travel planning apps to identify common pain points: cluttered interfaces, text-heavy displays, and lack of visual engagement. Noted that successful travel apps (Airbnb, TripAdvisor) prioritize imagery to create emotional connection",
      
      "Defined core user needs for a travel itinerary app: quick trip setup, clear daily schedule overview, visual activity representation, and seamless navigation integration. Prioritized simplicity over feature bloat",
      
      "Designed onboarding flow with minimal friction—three essential inputs (destination, duration, travelers) presented with clear labels and visual spacing. Used gradient background to create welcoming, travel-themed aesthetic distinct from productivity apps",
      
      "Created activity card component with key information hierarchy: prominent image (creates excitement/recognition), time and duration (practical planning), distance metadata (logistics), and action buttons (navigation/details). Chose card-based layout over list view for better visual scanning",
      
      "Established visual design system: Blue gradient (#60A5FA → #6366F1) evokes sky/travel, Amber (#F59E0B) for active day selection creates warmth, white cards with subtle shadows for content hierarchy. Selected modern sans-serif typography for readability on mobile",
      
      "Implemented horizontal date scroller for intuitive day navigation—similar to Instagram Stories pattern users already understand. Active day uses amber highlight for clear visual feedback. Activity cards display time badges as overlays on images to maximize content density while maintaining clarity"
    ],
    
    metrics: [
      {
        value: "2",
        label: "Core screens designed (Onboarding + Trip Dashboard) showcasing key user flows",
        color: "text-blue-400",
        gradient: "from-blue-500/10 to-purple-500/10",
        border: "border-blue-500/20"
      },
      {
        value: "Image-First",
        label: "Visual design approach prioritizing engagement and memory retention",
        color: "text-purple-400",
        gradient: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20"
      },
      {
        value: "Mobile",
        label: "iOS-optimized design with clear tap targets and thumb-friendly navigation",
        color: "text-teal-400",
        gradient: "from-teal-500/10 to-green-500/10",
        border: "border-teal-500/20"
      }
    ],
    
    learnings: [
      {
        title: "Visual Design Drives Engagement",
        description: "Image-first activity cards create emotional connection and help users remember their plans better than text-only lists—key insight from analyzing high-performing travel apps",
        color: "text-blue-400"
      },
      {
        title: "Progressive Disclosure Reduces Friction",
        description: "Onboarding with just 3 inputs (vs typical 10+ field forms) respects user time while capturing essential trip information—learned from evaluating competitor sign-up flows",
        color: "text-purple-400"
      },
      {
        title: "Familiar Patterns Build Confidence",
        description: "Horizontal date scroller mirrors Instagram Stories—leveraging existing mental models helps users navigate without instruction, reducing learning curve",
        color: "text-amber-400"
      },
      {
        title: "Mobile Constraints Require Prioritization",
        description: "Limited screen space forced decisions on what information matters most—time, image, distance, and navigation proved essential; secondary details can wait for detail view",
        color: "text-teal-400"
      }
    ],
    
    // Screen images - ADD YOUR URLS HERE after exporting the 2 screens from Figma
    screens: [
      {
        title: "Onboarding Screen",
        description: "User-friendly input flow with destination, trip duration, and traveler selection",
        image: "" // Add URL of your onboarding screen export
      },
      {
        title: "Trip Dashboard / Day View",
        description: "Structured daily itinerary with visual activity cards, date navigation, and embedded travel details",
        image: "" // Add URL of your dashboard screen export
      }
    ],
    
    //mockupImage: "", // Alternative: single composite image showing both screens
    
    // Fallback text if metrics don't render
    impact: "Travello demonstrates strong visual design skills and understanding of mobile UI patterns. The project showcases ability to create clean, intuitive interfaces that prioritize user needs through progressive onboarding (3 simple inputs vs complex forms), visual-first design (image-rich cards for engagement), familiar interaction patterns (horizontal date scroller), and mobile optimization (clear tap targets, thumb-friendly layout). Key design decisions include gradient backgrounds for travel aesthetic differentiation, card-based layouts for better content scanning, overlay time badges for space efficiency, and integrated navigation links for seamless user flow. This work represents foundational UI design skills with plans to expand into complete end-to-end UX case study including additional screens for activity details, map view, and discovery features."
  }
},
  {
    title: "SUBTRACK - Subscription Management App",
    year: "Jun 2024",
    description: "Mobile app addressing subscription fatigue through centralized tracking, proactive notifications, and streamlined management—validated by research with 7 users and industry data showing 73% market demand.",
    tech: ["Figma", "User Research", "Prototyping", "Information Architecture"],
    type: "UX Design",
    category: "Mobile App Design",
    color: "from-indigo-500 to-purple-500",
    
    //behanceLink: "https://www.behance.net/your-username/subtrack", // UPDATE THIS
    
    caseStudy: {
      problem: "In an era where the average consumer manages 8.2 subscriptions totaling $1,416 annually, users lack visibility into their total spending, receive no proactive warnings before renewals, and face intentionally complex cancellation processes. The FTC received 70 complaints per day in 2024 (up from 42 in 2021) about difficult-to-cancel subscriptions, leading to implementation of the 'Click-to-Cancel' rule. Research with 7 participants revealed 42% find canceling difficult, 57% rely on inefficient email tracking, and 100% rated renewal notifications as critical—yet 73% want consolidated management while only 2% currently use a single app.",
      
      stats: [
        { value: "8.2", label: "Average subscriptions per consumer", color: "text-red-400" },
        { value: "70/day", label: "FTC complaints about cancellations", color: "text-orange-400" },
        { value: "$1,416", label: "Average annual subscription spending", color: "text-yellow-400" }
      ],
      
      solution: "SubTrack addresses these challenges through three core design principles: visibility, control, and proactive awareness. The dashboard provides at-a-glance spending overview with total monthly cost in large typography (36px hero number), addressing the 73% market demand for consolidated management. Smart categorization organizes subscriptions by type (Entertainment, Productivity, Music) using color-coding for rapid visual scanning—matching users' natural mental models. Most critically, customizable renewal notifications (3, 5, or 7 days in advance) tackle the universal pain point validated by 100% of research participants. Streamlined in-app cancellation aligns with FTC's Click-to-Cancel rule, reducing friction that currently drives 70 daily complaints.",
      
      features: [
        {
          title: "Dashboard-Centric Design",
          description: "Total spending + active count visible within 3 seconds",
          bgColor: "bg-blue-500/20",
          iconColor: "text-blue-400"
        },
        {
          title: "Smart Categorization",
          description: "Auto-sort by type with color-coded visual scanning",
          bgColor: "bg-purple-500/20",
          iconColor: "text-purple-400"
        },
        {
          title: "Proactive Notifications",
          description: "Customizable alerts 3-7 days before renewal",
          bgColor: "bg-green-500/20",
          iconColor: "text-green-400"
        },
        {
          title: "Frictionless Management",
          description: "Pause/cancel in ≤3 taps, FTC-compliant design",
          bgColor: "bg-pink-500/20",
          iconColor: "text-pink-400"
        }
      ],
      
      process: [
        "Conducted semi-structured interviews with 7 participants (ages 18-55) managing 5+ subscriptions, revealing 71.4% review subscriptions monthly and 100% value renewal notifications—validating proactive alert system as core feature, not nice-to-have",
        
        "Performed competitive analysis of 5 apps (Fleek, SubX, SubsCrab, Rocket Money, Truebill) through 50+ App Store reviews, identifying critical gap: all competitors focus on tracking OR cancellation, none address complete user journey from discovery → monitoring → action",
        
        "Synthesized research into four validated user needs: (1) Visibility—73% want consolidated view, (2) Control—42% find canceling difficult, (3) Proactive awareness—100% rated notifications critical, (4) Organization—users categorize by type, not alphabetically",
        
        "Created low-fidelity wireframes for 8 core screens, iterating 3x based on feedback from 3 participants. Key decision: moved dashboard from 3rd tab to primary home screen, increased spending amount from 24px to 36px for emphasis, changed 'Delete' to 'Cancel Subscription' with warning icon to reduce anxiety",
        
        "Established design system grounded in financial app psychology: Primary Blue (#007BFF) for trust (research shows 37% increase in perceived trustworthiness), Success Green (#28A745) for financial health, Roboto typography for mobile readability—8px spacing grid ensures consistent hierarchy across all screens",
        
        "Designed high-fidelity wireframes at 393×852px (iPhone 14 Pro standard) with WCAG AA accessibility compliance. Usability testing with 5 participants achieved 95% task success rate (find spending, set notification, cancel subscription), with one iteration adding icons to category tabs for clarity"
      ],
      
      metrics: [
        {
          value: "73%",
          label: "Of consumers want centralized subscription management (validated market need)",
          color: "text-green-400",
          gradient: "from-green-500/10 to-teal-500/10",
          border: "border-green-500/20"
        },
        {
          value: "100%",
          label: "Of research participants rated renewal alerts as critical feature",
          color: "text-blue-400",
          gradient: "from-blue-500/10 to-purple-500/10",
          border: "border-blue-500/20"
        },
        {
          value: "95%",
          label: "Task success rate in usability testing (find spending, set alert, cancel)",
          color: "text-purple-400",
          gradient: "from-purple-500/10 to-pink-500/10",
          border: "border-purple-500/20"
        }
      ],
      
      learnings: [
        {
          title: "Research Validates, Not Just Informs",
          description: "71.4% monthly review frequency directly drove dashboard as primary screen—data justified design decision",
          color: "text-green-400"
        },
        {
          title: "Universal Needs Exist",
          description: "100% notification validation eliminated debate on whether to make it optional—it's core, not configurable",
          color: "text-blue-400"
        },
        {
          title: "Competitive Gaps Are Opportunities",
          description: "Manual input = #1 complaint in competitor reviews—informed decision to design for future auto-detection API",
          color: "text-purple-400"
        },
        {
          title: "Design Systems Build Trust",
          description: "Consistent blue/green color psychology + Roboto typography signals 'financial app' reliability, not 'casual tracker'",
          color: "text-orange-400"
        }
      ],
      
      // Screen images - ADD YOUR URLS HERE after creating in Figma
      /*screens: [
        {
          title: "Splash Screen",
          description: "Brand identity & loading state",
          image: "" // Add after Figma export
        },
        {
          title: "Dashboard",
          description: "At-a-glance spending + upcoming bills",
          image: "" // Add after Figma export
        },
        {
          title: "All Subscriptions",
          description: "Grid view with smart categories",
          image: "" // Add after Figma export
        },
        {
          title: "Subscription Details",
          description: "Comprehensive view + management",
          image: "" // Add after Figma export
        },
        {
          title: "Add Subscription",
          description: "Manual entry form",
          image: "" // Add after Figma export
        },
        {
          title: "Notifications",
          description: "Renewal alerts & system messages",
          image: "" // Add after Figma export
        },
        {
          title: "Settings",
          description: "Account & app configuration",
          image: "" // Add after Figma export
        },
        {
          title: "Onboarding",
          description: "Feature education for new users",
          image: "" // Add after Figma export
        }
      ],*/
      
      //mockupImage: "", // Alternative: single composite image
      
      // Fallback text if metrics don't render
      impact: "SubTrack directly addresses documented market needs: 73% want consolidated management, 100% of participants validated renewal notifications as critical, and FTC's 70 daily complaints prove cancellation friction is systemic. The design achieved 95% task success in usability testing and aligns with regulatory requirements (Click-to-Cancel rule). Key insights emphasize research-driven decisions (71.4% monthly review → dashboard priority), universal pain point validation (100% notification need → core feature), competitive analysis revealing gaps (manual input complaints → auto-detection opportunity), and design system creating trust (color psychology + typography → financial app credibility)."
    }
  },
  {
    title: "Todo Application",
    year: "2024",
    description: "Backend-driven to-do list with CRUD functionalities and RESTful API.",
    tech: ["Node.js", "Express.js", "SQLite"],
    type: "Full-Stack",
    category: "Full-Stack Application",
    color: "from-blue-500 to-cyan-500",
    highlights: ["RESTful API", "CRUD Operations", "SQLite Integration"],
    githubLink: "https://github.com/AzraSiddique/ExpressJs-Todo-Application",
    liveLink: null
  },
  {
    title: "Coin Toss Game",
    year: "2024",
    description: "Interactive game with real-time state management and dynamic UI updates.",
    tech: ["React.js", "JavaScript", "CSS"],
    type: "Full-Stack",
    category: "Dynamic Web App",
    color: "from-purple-500 to-pink-500",
    highlights: ["React State Management", "Real-time Updates", "Event Handling"],
    githubLink: "https://github.com/AzraSiddique/Coin-Toss-Game-ReactJS",
    liveLink: "https://cointossgame652.ccbp.tech/"
  }
];

export const allProjects = {
  fullstack: [
    ...featuredProjects.filter(p => p.type === "Full-Stack"),
    {
      title: "VR Products Store",
      year: "2023",
      description: "Responsive website showcasing VR products.",
      tech: ["HTML", "CSS", "Bootstrap"],
      type: "Full-Stack",
      category: "Static Website",
      color: "from-orange-500 to-red-500",
      highlights: ["Responsive Design", "Bootstrap Grid", "Product Catalog"],
      githubLink: "#",
      liveLink: "#"
    }
  ],
  ux: [
    ...featuredProjects.filter(p => p.type === "UX Design"),
    {
      title: "Netclan Explorer Redesign",
      year: "Jul 2024",
      description: "Redesigned Profile, Refine, and Connections screens.",
      tech: ["Figma", "Prototyping"],
      type: "UX Design",
      category: "Mobile App Redesign",
      color: "from-pink-500 to-rose-500",
      caseStudy: {
        problem: "Poor visual hierarchy made navigation difficult.",
        solution: "Redesigned with improved hierarchy and clearer call-to-actions.",
        process: [
          "Analyzed existing app",
          "Gathered user feedback",
          "Redesigned key screens",
          "Created interactive prototypes"
        ],
        impact: "Improved user engagement through clearer visual hierarchy."
      }
    }
  ]
};

export const skills = {
  backend: ["Python", "Node.js", "Express.js", "RESTful APIs"],
  frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
  database: ["SQL", "SQLite"],
  tools: ["Git", "GitHub", "Figma", "Canva"],
  ux: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Thinking", "Information Architecture"]
};

export const certifications = [
  { name: "Google UX Design Professional", year: "2025", status: "Completed", link: "https://drive.google.com/file/d/1_8GebKXDLtRyGFGkSMfY4UhttAzLB68d/view?usp=sharing" },
  { name: "IBM AI Developer Professional", year: "2025", status: "In Progress", link: "#" },
  { name: "NPTEL - Introduction to Databases", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/1iXX4a2iOCSTjKmmA5u4bOKr7bWk47_tK/view?usp=sharing" },
  { name: "NPTEL - Fundamentals of Artificial Intelligence", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/1FLBBd-aLVnfylS3-z3zaajpuYYGa8y1G/view?usp=sharing" },
  { name: "Google IT Automation with Python", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1LVKn0Z47IZHsXBDTVpsOgADIPNhh7DLj/view?usp=sharing" },
  { name: "NPTEL - Joy of Computing with Python", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/13f6xVg8I5V5a5NpwGj3caiM7Mev_-R7D/view?usp=sharing" },
  { name: "NPTEL - Programming, Data Structures, and Algorithms Using Python", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1GQUZiEo_FiV5fx4CZv6e2LR_VqW4GTlA/view?usp=sharing" },
  { name: "NPTEL - Problem-Solving through C", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1N7eIkDPHDGPjyx58wf6-eRMrnydHFhNz/view?usp=sharing" },
  { name: "NPTEL - C Programming and Assembly Language", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1TWIBYqj3dOYojnHDtNHnHPUSfPuKLpg5/view?usp=sharing" },
  { name: "NPTEL - Programming in Java", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/1NDND9YheGL1RqtgmVUq3AW0MgV8XOzmq/view?usp=sharing" },
  { name: "NPTEL - Speaking Effectively", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/13ZCs62jLmzkoDh-dFhkTLBV9x67fWlyl/view?usp=sharing" },
  { name: "NPTEL - Effective Writing", year: "2023", status: "Completed", link: "https://drive.google.com/file/d/13XkfQ2w5U3BWT26l6Wj1msXh5gK6Qqal/view?usp=sharing" },
  { name: "NPTEL - Soft Skill Development", year: "2022", status: "Completed", link: "https://drive.google.com/file/d/13cKweZ4QWkA6wZsOWxi51AhhO-zznMeM/view?usp=sharing" }
];